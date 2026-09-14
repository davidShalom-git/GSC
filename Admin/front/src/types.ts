export interface VideoItem {
  id: string | number;
  _id?: string | number;
  title: string;
  url: string;
  thumbnail?: string;
  thumbnailType?: string;
  type?: string;
  duration?: number;
  uploadDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventItem {
  id: string | number;
  _id?: string | number;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  base64Data?: string;
  uploadedAt?: string;
  createdAt?: string;
}

export interface PromiseItem {
  id: string | number;
  _id?: string | number;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  base64Data?: string;
  uploadedAt?: string;
  createdAt?: string;
  imageUrl?: string;
}

export type TabType = 'overview' | 'videos' | 'events' | 'promises' | 'archive';

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
