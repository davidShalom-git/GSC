// videoRoutes.js (Routes)
const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const upload = multer();

// Helper to format video row for backward compatibility
const formatVideo = (row) => ({
  id: row.id,
  _id: row.id,
  title: row.title,
  url: row.url,
  thumbnail: row.thumbnail,
  thumbnailType: row.thumbnail_type,
  type: row.type,
  duration: row.duration,
  uploadDate: row.upload_date,
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

router.post('/upload', upload.single('thumbnail'), async (req, res) => {
  try {
    const title = req.body.title;
    const url = req.body.url;
    const type = 'video';
    const duration = req.body.duration ? parseInt(req.body.duration, 10) : null;
    let thumbnail = null;
    let thumbnailType = 'url';

    // Handle thumbnail if uploaded as file
    if (req.file) {
      const base64Thumbnail = req.file.buffer.toString('base64');
      thumbnail = base64Thumbnail;
      thumbnailType = 'base64';
    }
    // Handle thumbnail if provided as URL
    else if (req.body.thumbnail) {
      thumbnail = req.body.thumbnail;
      thumbnailType = req.body.thumbnailType || 'url';
    }

    const result = await db.query(
      `INSERT INTO videos (title, url, thumbnail, thumbnail_type, type, duration)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [title, url, thumbnail, thumbnailType, type, duration]
    );

    res.status(201).json(formatVideo(result.rows[0]));
  } catch (error) {
    console.error('❌ Error saving video:', error);
    res.status(500).json({ message: '🔥 Internal Server Error', error: error.message });
  }
});

router.get('/url', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM videos WHERE type = 'video' ORDER BY upload_date DESC`
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: 'No videos found' });
    }

    res.json(result.rows.map(formatVideo));
  } catch (error) {
    console.error('❌ Error fetching videos:', error);
    res.status(500).json({ message: 'Data not found', error: error.message });
  }
});

router.patch('/:id/thumbnail', async (req, res) => {
  try {
    const { id } = req.params;
    const { thumbnail, thumbnailType } = req.body;

    const result = await db.query(
      `UPDATE videos
       SET thumbnail = $1, thumbnail_type = $2, updated_at = NOW()
       WHERE id = $3
       RETURNING *`,
      [thumbnail, thumbnailType || 'url', id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.json({ message: 'Thumbnail updated successfully', data: formatVideo(result.rows[0]) });
  } catch (error) {
    console.error('❌ Error updating thumbnail:', error);
    res.status(500).json({ message: 'Error updating thumbnail', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `DELETE FROM videos WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Media not found' });
    }

    res.json({ message: 'Media deleted successfully', data: formatVideo(result.rows[0]) });
  } catch (error) {
    console.error('❌ Error deleting media:', error);
    res.status(500).json({ message: 'Error deleting media', error: error.message });
  }
});

module.exports = router;