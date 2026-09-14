// API Endpoint Resolvers and Media Helpers

export const API_ENDPOINTS = {
  get videoUrl() {
    if (import.meta.env.VITE_URL) return import.meta.env.VITE_URL;
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:1995/api/video/url';
    }
    return 'https://api.fggschurch.com/api/video/url';
  },

  get eventUrl() {
    if (import.meta.env.VITE_EVENT) return import.meta.env.VITE_EVENT;
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:1995/api/event/event';
    }
    return 'https://api.fggschurch.com/api/event/event';
  },

  get promiseUrl() {
    if (import.meta.env.VITE_PROMISE) return import.meta.env.VITE_PROMISE;
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:1995/api/promise/pro';
    }
    return 'https://api.fggschurch.com/api/promise/pro';
  }
};

/**
 * Returns a guaranteed working image URL for any video
 * Supports uploaded base64 thumbnails, direct image URLs, and automatic YouTube thumbnail extraction.
 */
export const getVideoThumbnail = (
  videoUrl?: string,
  thumbnail?: string,
  thumbnailType?: string
): string => {
  if (thumbnail) {
    if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://') || thumbnail.startsWith('data:')) {
      return thumbnail;
    }
    if (thumbnailType === 'base64' || !thumbnail.startsWith('http')) {
      return `data:image/jpeg;base64,${thumbnail}`;
    }
  }

  if (videoUrl) {
    const ytMatch = videoUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    if (ytMatch && ytMatch[2].length === 11) {
      return `https://img.youtube.com/vi/${ytMatch[2]}/hqdefault.jpg`;
    }
  }

  return '/Hero/3.jpeg';
};
