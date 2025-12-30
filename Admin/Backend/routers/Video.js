// videoRoutes.js (Routes)
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const multer = require('multer');
const upload = multer();

router.post('/upload', upload.single('thumbnail'), async (req, res) => {
  try {
    let videoData = {
      title: req.body.title,
      url: req.body.url,
      type: 'video',
      duration: req.body.duration || null
    };

    // Handle thumbnail if uploaded as file
    if (req.file) {
      const base64Thumbnail = req.file.buffer.toString('base64');
      videoData.thumbnail = base64Thumbnail;
      videoData.thumbnailType = 'base64';
    }
    // Handle thumbnail if provided as URL
    else if (req.body.thumbnail) {
      videoData.thumbnail = req.body.thumbnail;
      videoData.thumbnailType = req.body.thumbnailType || 'url';
    }

    const video = new Video(videoData);
    const saved = await video.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Error saving video:', error);
    res.status(500).json({ message: '🔥 Internal Server Error', error });
  }
});

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


router.patch('/:id/thumbnail', async (req, res) => {
  try {
    const { id } = req.params;
    const { thumbnail, thumbnailType } = req.body;

    const updated = await Video.findByIdAndUpdate(
      id,
      { thumbnail, thumbnailType: thumbnailType || 'url' },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Video not found' });
    res.json({ message: 'Thumbnail updated successfully', data: updated });
  } catch (error) {
    console.error('❌ Error updating thumbnail:', error);
    res.status(500).json({ message: 'Error updating thumbnail', error });
  }
});


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