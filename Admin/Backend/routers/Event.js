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
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});

const formatImage = (row) => ({
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
  updatedAt: row.updated_at
});

router.post('/upload', upload.single('image'), async (req, res) => {
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
      `INSERT INTO event_images (name, original_name, mime_type, size, base64_data, upload_path)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [fileName, file.originalname, file.mimetype, file.size, base64Data, `memory-${fileName}`]
    );

    const saved = formatImage(result.rows[0]);

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
    console.error('Error storing image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to store image',
      error: error.message
    });
  }
});

router.get('/event', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM event_images ORDER BY created_at DESC`
    );

    const images = result.rows.map(formatImage);

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

router.get('/event/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `SELECT * FROM event_images WHERE id = $1`,
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
      data: formatImage(result.rows[0])
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
      `SELECT base64_data, mime_type FROM event_images WHERE id = $1`,
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      `DELETE FROM event_images WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Event image not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event poster deleted successfully',
      data: formatImage(result.rows[0])
    });
  } catch (error) {
    console.error('Error deleting event image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete event image',
      error: error.message
    });
  }
});

module.exports = router;