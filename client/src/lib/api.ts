// API Endpoint Resolvers and Media Helpers

export const API_ENDPOINTS = {
  get baseUrl() {
    if (import.meta.env.VITE_API_BASE) return import.meta.env.VITE_API_BASE;
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:1995';
    }
    return 'https://api.fggschurch.com';
  },

  get videoUrl() {
    if (import.meta.env.VITE_URL) return import.meta.env.VITE_URL;
    return `${this.baseUrl}/api/video/url`;
  },

  get eventUrl() {
    if (import.meta.env.VITE_EVENT) return import.meta.env.VITE_EVENT;
    return `${this.baseUrl}/api/event/event`;
  },

  get promiseUrl() {
    if (import.meta.env.VITE_PROMISE) return import.meta.env.VITE_PROMISE;
    return `${this.baseUrl}/api/promise/pro`;
  },

  eventServeUrl: (id: string | number) => {
    const base = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
      ? 'http://localhost:1995'
      : 'https://api.fggschurch.com';
    return `${base}/api/event/serve/${id}`;
  },

  promiseServeUrl: (id: string | number) => {
    const base = (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
      ? 'http://localhost:1995'
      : 'https://api.fggschurch.com';
    return `${base}/api/promise/serve/${id}`;
  }
};

/**
 * Resolves a full usable image URL for uploaded Event or Promise items.
 * Handles base64 data strings, relative server paths, and fallback serve endpoints.
 */
export const getMediaImageUrl = (
  item?: { id?: string | number; _id?: string | number; base64Data?: string; mimeType?: string; imageUrl?: string },
  type: 'event' | 'promise' = 'event'
): string | null => {
  if (!item) return null;

  if (item.base64Data) {
    return `data:${item.mimeType || 'image/jpeg'};base64,${item.base64Data}`;
  }

  if (item.imageUrl) {
    if (item.imageUrl.startsWith('http://') || item.imageUrl.startsWith('https://') || item.imageUrl.startsWith('data:')) {
      return item.imageUrl;
    }
    const base = API_ENDPOINTS.baseUrl;
    return `${base}${item.imageUrl.startsWith('/') ? '' : '/'}${item.imageUrl}`;
  }

  const itemId = item.id || item._id;
  if (itemId) {
    return type === 'event' ? API_ENDPOINTS.eventServeUrl(itemId) : API_ENDPOINTS.promiseServeUrl(itemId);
  }

  return null;
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

