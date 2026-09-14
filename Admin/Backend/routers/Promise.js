const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../db');

const router = express.Router();
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
});

const formatPromise = (row) => ({
  id: row.id,
  _id: row.id,
  name: row.name,
  originalName: row.original_name,
  mimeType: row.mime_type,
  size: row.size,
  base64Data: row.base64_data,
  uploadPath: row.upload_path,
  uploadedAt: row.uploaded_at,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
  imageUrl: `/api/promise/serve/${row.id}`
});

router.post('/pro', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const file = req.file;
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
    const base64Data = file.buffer.toString('base64');

    const result = await db.query(
      `INSERT INTO promise_words (name, original_name, mime_type, size, base64_data, upload_path)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [fileName, file.originalname, file.mimetype, file.size, base64Data, `memory-${fileName}`]
    );

    const saved = formatPromise(result.rows[0]);

    res.status(201).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        id: saved.id,
        _id: saved.id,
        name: saved.name,
        originalName: saved.originalName,
        mimeType: saved.mimeType,
        size: saved.size,
        uploadedAt: saved.uploadedAt
      }
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to upload image',
      error: error.message
    });
  }
});

router.get('/pro', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM promise_words ORDER BY created_at DESC`
    );

    const images = result.rows.map(formatPromise);

    res.status(200).json({
      success: true,
      count: images.length,
      data: images
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch images',
      error: error.message
    });
  }
});

router.get('/eng/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `SELECT * FROM promise_words WHERE id = $1`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    res.status(200).json({
      success: true,
      data: formatPromise(result.rows[0])
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch image',
      error: error.message
    });
  }
});

router.get('/serve/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `SELECT base64_data, mime_type FROM promise_words WHERE id = $1`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    const image = result.rows[0];
    const imageBuffer = Buffer.from(image.base64_data, 'base64');

    res.setHeader('Content-Type', image.mime_type);
    res.setHeader('Content-Length', imageBuffer.length);
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error serving image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to serve image',
      error: error.message
    });
  }
});

module.exports = router;