import React, { useState, useEffect, useMemo } from 'react';
import {
  Video,
  Calendar,
  Heart,
  ExternalLink,
  Trash2,
  RefreshCw,
  Eye,
  AlertCircle
} from 'lucide-react';
import type { VideoItem, EventItem, PromiseItem, ToastNotification } from '../types';
import { Dropzone } from './Dropzone';
import { ToastContainer } from './Toast';

const ChurchAdminPanel: React.FC = () => {
  // Data Collections
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [promises, setPromises] = useState<PromiseItem[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  // Forms
  const [video, setVideo] = useState({ title: '', url: '', thumbnail: '' });
  const [videoThumbnailFile, setVideoThumbnailFile] = useState<File | null>(null);
  const [isUploadingVideo, setIsUploadingVideo] = useState<boolean>(false);

  const [eventFile, setEventFile] = useState<File | null>(null);
  const [isUploadingEvent, setIsUploadingEvent] = useState<boolean>(false);

  const [promiseFile, setPromiseFile] = useState<File | null>(null);
  const [isUploadingPromise, setIsUploadingPromise] = useState<boolean>(false);

  // Modals & Notifications
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string | number; type: 'video' | 'event' | 'promise'; name: string } | null>(null);

  // Endpoints configuration
  const apiBaseUrl = useMemo(() => {
    const rawUrl = import.meta.env.VITE_URL;
    if (rawUrl) {
      try {
        const parsed = new URL(rawUrl);
        return parsed.origin;
      } catch {
        // fallback
      }
    }
    return 'http://localhost:1995';
  }, []);

  const endpoints = useMemo(() => ({
    videoUpload: import.meta.env.VITE_URL || `${apiBaseUrl}/api/video/upload`,
    videoList: `${apiBaseUrl}/api/video/url`,
    videoDelete: (id: string | number) => `${apiBaseUrl}/api/video/${id}`,

    eventUpload: import.meta.env.VITE_EVENT || `${apiBaseUrl}/api/event/upload`,
    eventList: `${apiBaseUrl}/api/event/event`,
    eventDelete: (id: string | number) => `${apiBaseUrl}/api/event/${id}`,

    promiseUpload: import.meta.env.VITE_PROMISE || `${apiBaseUrl}/api/promise/pro`,
    promiseList: `${apiBaseUrl}/api/promise/pro`,
    promiseDelete: (id: string | number) => `${apiBaseUrl}/api/promise/${id}`,
  }), [apiBaseUrl]);

  // Toast notification
  const addToast = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Fetch all media
  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      // 1. Videos
      try {
        const res = await fetch(endpoints.videoList);
        if (res.ok) {
          const data = await res.json();
          setVideos(Array.isArray(data) ? data : []);
        }
      } catch {
        // quiet
      }

      // 2. Events
      try {
        const res = await fetch(endpoints.eventList);
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : data.data || [];
          setEvents(items);
        }
      } catch {
        // quiet
      }

      // 3. Promises
      try {
        const res = await fetch(endpoints.promiseList);
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : data.data || [];
          setPromises(items);
        }
      } catch {
        // quiet
      }
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [endpoints]);

  // Auto YouTube thumbnail
  const youtubeThumbnail = useMemo(() => {
    if (!video.url) return null;
    const match = video.url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    return match && match[2].length === 11
      ? `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`
      : null;
  }, [video.url]);

  // Handle Video Upload
  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!video.title.trim()) {
      addToast('error', 'Please enter a video title');
      return;
    }
    if (!video.url.trim()) {
      addToast('error', 'Please enter a video URL');
      return;
    }

    try {
      setIsUploadingVideo(true);

      if (videoThumbnailFile) {
        const formData = new FormData();
        formData.append('title', video.title.trim());
        formData.append('url', video.url.trim());
        formData.append('thumbnail', videoThumbnailFile);

        const response = await fetch(endpoints.videoUpload, {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Upload failed');
      } else {
        const response = await fetch(endpoints.videoUpload, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: video.title.trim(),
            url: video.url.trim(),
            thumbnail: video.thumbnail.trim() || youtubeThumbnail || '',
          }),
        });
        if (!response.ok) throw new Error('Upload failed');
      }

      addToast('success', 'Video Uploaded Successfully!', `"${video.title}" is now published.`);
      setVideo({ title: '', url: '', thumbnail: '' });
      setVideoThumbnailFile(null);
      fetchAllData();
    } catch {
      addToast('error', 'Failed to upload video', 'Please check server connection and try again.');
    } finally {
      setIsUploadingVideo(false);
    }
  };

  // Handle Event Upload
  const handleEventUpload = async () => {
    if (!eventFile) {
      addToast('error', 'Please select an event poster file first');
      return;
    }

    try {
      setIsUploadingEvent(true);
      const formData = new FormData();
      formData.append('image', eventFile);

      const response = await fetch(endpoints.eventUpload, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      addToast('success', 'Event Poster Uploaded!', 'Poster is now live on the church website.');
      setEventFile(null);
      fetchAllData();
    } catch {
      addToast('error', 'Failed to upload poster', 'Please try again with a JPG or PNG image.');
    } finally {
      setIsUploadingEvent(false);
    }
  };

  // Handle Promise Upload
  const handlePromiseUpload = async () => {
    if (!promiseFile) {
      addToast('error', 'Please select a promise word image first');
      return;
    }

    try {
      setIsUploadingPromise(true);
      const formData = new FormData();
      formData.append('image', promiseFile);

      const response = await fetch(endpoints.promiseUpload, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      addToast('success', 'Promise Scripture Uploaded!', 'New banner is now live.');
      setPromiseFile(null);
      fetchAllData();
    } catch {
      addToast('error', 'Failed to upload promise word');
    } finally {
      setIsUploadingPromise(false);
    }
  };

  // Handle Delete
  const handleDelete = async () => {
    if (!deleteConfirm) return;
    const { id, type } = deleteConfirm;

    try {
      let deleteUrl = '';
      if (type === 'video') deleteUrl = endpoints.videoDelete(id);
      if (type === 'event') deleteUrl = endpoints.eventDelete(id);
      if (type === 'promise') deleteUrl = endpoints.promiseDelete(id);

      const res = await fetch(deleteUrl, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');

      addToast('info', 'Item Removed', 'Deleted from church website.');
      setDeleteConfirm(null);
      fetchAllData();
    } catch {
      addToast('error', 'Failed to delete item');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans">
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Clean, Human Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 text-amber-300 font-serif font-bold text-base flex items-center justify-center shadow-xs">
              GSC
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Good Shepherd Church
              </h1>
              <p className="text-xs text-slate-500">
                Content Upload Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={fetchAllData}
              disabled={loadingData}
              className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Refresh content list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? 'animate-spin text-emerald-600' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <a
              href="https://www.fggschurch.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Intro */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Upload Church Content
          </h2>
          <p className="text-sm text-slate-500">
            Publish Sunday sermon videos, upcoming event flyers, and promise scriptures directly to the church website.
          </p>
        </div>

        {/* 3 Upload Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* CARD 1: VIDEO UPLOAD */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Video Sermon</h3>
                  <p className="text-xs text-slate-400">Share YouTube / devotional videos</p>
                </div>
              </div>

              <form onSubmit={handleVideoUpload} id="video-form" className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Video Title
                  </label>
                  <input
                    type="text"
                    required
                    value={video.title}
                    onChange={(e) => setVideo({ ...video, title: e.target.value })}
                    placeholder="e.g. Sunday Worship Service"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Video URL (YouTube or Vimeo)
                  </label>
                  <input
                    type="url"
                    required
                    value={video.url}
                    onChange={(e) => setVideo({ ...video, url: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                  {youtubeThumbnail && (
                    <div className="mt-2 flex items-center gap-2 p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                      <img src={youtubeThumbnail} alt="Auto thumb" className="w-12 h-8 object-cover rounded" />
                      <span className="text-[11px] text-emerald-700 font-medium">✓ YouTube thumbnail detected</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Custom Thumbnail (Optional)
                  </label>
                  <Dropzone
                    label="Upload thumbnail image"
                    sublabel="16:9 • PNG, JPG"
                    file={videoThumbnailFile}
                    onFileSelect={(file) => setVideoThumbnailFile(file)}
                    accentColor="amber"
                  />
                </div>
              </form>
            </div>

            <button
              type="submit"
              form="video-form"
              disabled={isUploadingVideo}
              className="mt-6 w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isUploadingVideo ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Uploading Video...</span>
                </>
              ) : (
                <>
                  <span>Upload Video</span>
                </>
              )}
            </button>
          </div>

          {/* CARD 2: EVENT POSTER */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Event Poster</h3>
                  <p className="text-xs text-slate-400">Announce upcoming church events</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Poster Image File
                </label>
                <Dropzone
                  label="Select Event Poster image"
                  sublabel="PNG, JPG up to 10MB"
                  file={eventFile}
                  onFileSelect={(file) => setEventFile(file)}
                  accentColor="blue"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500">
                <p className="font-medium text-slate-700 mb-0.5">ℹ️ Where does this show?</p>
                <p>This image will appear on the church home page under the Events banner.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleEventUpload}
              disabled={isUploadingEvent || !eventFile}
              className="mt-6 w-full py-2.5 px-4 bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isUploadingEvent ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Uploading Poster...</span>
                </>
              ) : (
                <>
                  <span>Upload Event Poster</span>
                </>
              )}
            </button>
          </div>

          {/* CARD 3: PROMISE WORD */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Promise Word</h3>
                  <p className="text-xs text-slate-400">Share scripture promise banner</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Promise Scripture Image
                </label>
                <Dropzone
                  label="Select Promise Scripture image"
                  sublabel="PNG, JPG up to 10MB"
                  file={promiseFile}
                  onFileSelect={(file) => setPromiseFile(file)}
                  accentColor="amber"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500">
                <p className="font-medium text-slate-700 mb-0.5">ℹ️ Where does this show?</p>
                <p>This scripture graphic displays on the Promise Word banner across the church site.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePromiseUpload}
              disabled={isUploadingPromise || !promiseFile}
              className="mt-6 w-full py-2.5 px-4 bg-purple-700 hover:bg-purple-600 text-white rounded-xl text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isUploadingPromise ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Uploading Promise...</span>
                </>
              ) : (
                <>
                  <span>Upload Promise Word</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Recently Uploaded / Active on Website */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Active Content on Website
              </h3>
              <p className="text-xs text-slate-500">
                Review or remove media currently published on the church website.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">{videos.length} Videos</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">{events.length} Events</span>
              <span className="px-2.5 py-1 bg-slate-100 rounded-lg">{promises.length} Promises</span>
            </div>
          </div>

          {/* Combined Grid of active items */}
          {videos.length === 0 && events.length === 0 && promises.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No items uploaded yet. Use the upload boxes above to add content.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Videos */}
              {videos.map((vid) => (
                <div
                  key={`vid-${vid.id || vid._id}`}
                  className="border border-slate-200 rounded-xl p-3 flex gap-3 items-center justify-between hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-9 rounded-lg bg-red-50 overflow-hidden shrink-0 flex items-center justify-center">
                      {vid.thumbnail ? (
                        <img
                          src={vid.thumbnail.startsWith('http') ? vid.thumbnail : `data:image/jpeg;base64,${vid.thumbnail}`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Video className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase text-red-600">Video</span>
                      <h4 className="text-xs font-semibold text-slate-900 truncate" title={vid.title}>
                        {vid.title}
                      </h4>
                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-slate-500 hover:text-emerald-700 flex items-center gap-1 truncate"
                      >
                        <span className="truncate">Watch Video</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setDeleteConfirm({
                        id: vid.id || vid._id || '',
                        type: 'video',
                        name: vid.title,
                      })
                    }
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                    title="Delete Video"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Event Posters */}
              {events.map((evt) => {
                const imgSrc = evt.base64Data
                  ? `data:${evt.mimeType || 'image/jpeg'};base64,${evt.base64Data}`
                  : undefined;
                return (
                  <div
                    key={`evt-${evt.id || evt._id}`}
                    className="border border-slate-200 rounded-xl p-3 flex gap-3 items-center justify-between hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-9 rounded-lg bg-cyan-50 overflow-hidden shrink-0 flex items-center justify-center">
                        {imgSrc ? (
                          <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <Calendar className="w-4 h-4 text-cyan-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-cyan-700">Event Poster</span>
                        <h4 className="text-xs font-semibold text-slate-900 truncate" title={evt.originalName || evt.name}>
                          {evt.originalName || evt.name}
                        </h4>
                        {imgSrc && (
                          <button
                            onClick={() =>
                              setPreviewImage({
                                url: imgSrc,
                                title: evt.originalName || evt.name,
                              })
                            }
                            className="text-[11px] text-slate-500 hover:text-cyan-700 flex items-center gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Preview</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setDeleteConfirm({
                          id: evt.id || evt._id || '',
                          type: 'event',
                          name: evt.originalName || evt.name,
                        })
                      }
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                      title="Delete Poster"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}

              {/* Promise Words */}
              {promises.map((p) => {
                const imgSrc = p.base64Data
                  ? `data:${p.mimeType || 'image/jpeg'};base64,${p.base64Data}`
                  : undefined;
                return (
                  <div
                    key={`prom-${p.id || p._id}`}
                    className="border border-slate-200 rounded-xl p-3 flex gap-3 items-center justify-between hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-9 rounded-lg bg-purple-50 overflow-hidden shrink-0 flex items-center justify-center">
                        {imgSrc ? (
                          <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <Heart className="w-4 h-4 text-purple-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase text-purple-700">Promise Word</span>
                        <h4 className="text-xs font-semibold text-slate-900 truncate" title={p.originalName || p.name}>
                          {p.originalName || p.name}
                        </h4>
                        {imgSrc && (
                          <button
                            onClick={() =>
                              setPreviewImage({
                                url: imgSrc,
                                title: p.originalName || p.name,
                              })
                            }
                            className="text-[11px] text-slate-500 hover:text-purple-700 flex items-center gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Preview</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setDeleteConfirm({
                          id: p.id || p._id || '',
                          type: 'promise',
                          name: p.originalName || p.name,
                        })
                      }
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                      title="Delete Promise"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 mt-auto">
        <p className="italic font-serif">
          "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." — Matthew 5:16
        </p>
      </footer>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800 truncate">
                {previewImage.title}
              </h4>
              <button
                onClick={() => setPreviewImage(null)}
                className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
            </div>
            <div className="p-4 bg-slate-50 max-h-[75vh] overflow-auto flex items-center justify-center">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900">
                Confirm Deletion
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Are you sure you want to delete <strong className="text-slate-800">"{deleteConfirm.name}"</strong>? It will be removed from the church website.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-xs transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChurchAdminPanel;