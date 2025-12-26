const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  originalName: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  base64Data: {
    type: String,
    required: true
  },
  uploadPath: {
    type: String,
    required: false
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    default: function() {
      return `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },
    unique: true
  }
}, {
  timestamps: true,
  collection: 'images'
});

ImageSchema.index({ name: 1 });
ImageSchema.index({ uploadedAt: -1 });
ImageSchema.index({ createdAt: -1 });


ImageSchema.pre('save', function(next) {
  if (!this.image || this.image === null) {
    this.image = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}_${this._id}`;
  }
  next();
});


ImageSchema.post('save', function(doc) {
  console.log('Document saved:', doc._id);
 
});

module.exports = mongoose.model('Image', ImageSchema);
