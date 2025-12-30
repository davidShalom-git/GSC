// Video.js (Model)
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,  // URL or base64 string
        required: false,
        default: null
    },
    thumbnailType: {
        type: String,
        enum: ['url', 'base64'],
        default: 'url'
    },
    type: {
        type: String,
        enum: ['video', 'audio'],
        default: 'video'
    },
    duration: {
        type: Number, 
        required: false
    },
    mimeType: {
        type: String,
        required: false,
        default: 'audio/mpeg'
    },
    fileSize: {
        type: Number, 
        required: false
    },
    storageType: {
        type: String,
        enum: ['url', 'base64'],
        default: 'url'
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

videoSchema.index({ type: 1, uploadDate: -1 });
videoSchema.index({ storageType: 1 });

module.exports = mongoose.model('Video', videoSchema);