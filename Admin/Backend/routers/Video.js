const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// POST: Upload video (expects JSON)
router.post('/upload', async (req, res) => {
  try {
    const { title, url, duration } = req.body;
    if (!title || !url)
      return res.status(400).json({ message: '❌ Title and URL are required' });

    const video = new Video({
      title,
      url,
      type: 'video',
      duration: duration || null
    });
    const saved = await video.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Error saving video:', error);
    res.status(500).json({ message: '🔥 Internal Server Error', error });
  }
});

// GET: All videos
router.get('/url', async (req, res) => {
  try {
    const videos = await Video.find({ type: 'video' }).sort({ uploadDate: -1 });
    if (!videos.length) return res.status(404).json({ message: 'No videos found' });
    res.json(videos);
  } catch (error) {
    console.error('❌ Error fetching videos:', error);
    res.status(500).json({ message: 'Data not found', error });
  }
});

// DELETE: by _id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Video.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Media not found' });
    res.json({ message: 'Media deleted successfully', data: deleted });
  } catch (error) {
    console.error('❌ Error deleting media:', error);
    res.status(500).json({ message: 'Error deleting media', error });
  }
});

module.exports = router;
