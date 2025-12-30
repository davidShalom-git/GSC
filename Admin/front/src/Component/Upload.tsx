import React, { useState } from 'react';
import { Video, Calendar, Heart } from 'lucide-react';

const ChurchAdminPanel = () => {
    const [promise, setPromise] = useState<File | null>(null);
    const [video, setVideo] = useState({
        title: "",
        url: "",
        thumbnail: "",
        thumbnailType: "url"
    });
    const [videoThumbnailFile, setVideoThumbnailFile] = useState<File | null>(null);
    const [event, setEvent] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<{ [key: string]: string }>({});

    const GetVideoData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideo({ ...video, [e.target.name]: e.target.value });
    };

    const handleVideoThumbnailFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setVideoThumbnailFile(file);
        if (file) {
            setVideo({ ...video, thumbnailType: "base64" });
        }
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = reader.result as string;
                const base64Data = base64String.split(',')[1];
                resolve(base64Data);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleVideo = async () => {
        try {
            setUploadStatus({ ...uploadStatus, video: 'uploading' });

            if (videoThumbnailFile) {
                const formData = new FormData();
                formData.append('title', video.title);
                formData.append('url', video.url);
                formData.append('thumbnail', videoThumbnailFile);
                formData.append('thumbnailType', 'base64');

                const response = await fetch(import.meta.env.VITE_URL, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) throw new Error("Failed to Upload the Video");

                setUploadStatus({ ...uploadStatus, video: 'success' });
                setVideo({ title: "", url: "", thumbnail: "", thumbnailType: "url" });
                setVideoThumbnailFile(null);
                setTimeout(() => setUploadStatus({ ...uploadStatus, video: '' }), 3000);
            } else {
                const response = await fetch(import.meta.env.VITE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(video)
                });

                if (!response.ok) throw new Error("Failed to Upload the Video");

                setUploadStatus({ ...uploadStatus, video: 'success' });
                setVideo({ title: "", url: "", thumbnail: "", thumbnailType: "url" });
                setTimeout(() => setUploadStatus({ ...uploadStatus, video: '' }), 3000);
            }
        } catch (error) {
            setUploadStatus({ ...uploadStatus, video: 'error' });
            console.error('Error uploading:', error);
        }
    };

    const getEventData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setEvent(file);
    };

    const handleEvent = async () => {
        if (!event) return;

        try {
            setUploadStatus({ ...uploadStatus, event: 'uploading' });
            const formData = new FormData();
            formData.append('image', event);

            const response = await fetch(import.meta.env.VITE_EVENT, {
                method: 'POST',
                body: formData
            });

            if (response?.ok) {
                setUploadStatus({ ...uploadStatus, event: 'success' });
                setEvent(null);
                setTimeout(() => setUploadStatus({ ...uploadStatus, event: '' }), 3000);
            } else {
                setUploadStatus({ ...uploadStatus, event: 'error' });
            }
        } catch (error) {
            setUploadStatus({ ...uploadStatus, event: 'error' });
            console.error('Error uploading:', error);
        }
    };

    const getPromiseDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setPromise(file);
    };

    const handlePromise = async () => {
        if (!promise) return;

        try {
            setUploadStatus({ ...uploadStatus, promise: 'uploading' });
            const formData = new FormData();
            formData.append('image', promise);

            const response = await fetch(import.meta.env.VITE_PROMISE, {
                method: 'POST',
                body: formData
            });

            if (response?.ok) {
                setUploadStatus({ ...uploadStatus, promise: 'success' });
                setPromise(null);
                setTimeout(() => setUploadStatus({ ...uploadStatus, promise: '' }), 3000);
            } else {
                setUploadStatus({ ...uploadStatus, promise: 'error' });
            }
        } catch (error) {
            setUploadStatus({ ...uploadStatus, promise: 'error' });
            console.error('Error uploading:', error);
        }
    };

    const StatusMessage = ({ status }: { status: string }) => {
        if (status === 'uploading') return <p className="text-blue-600 text-sm mt-2">Uploading...</p>;
        if (status === 'success') return <p className="text-green-600 text-sm mt-2">✓ Upload successful!</p>;
        if (status === 'error') return <p className="text-red-600 text-sm mt-2">✗ Upload failed. Please try again.</p>;
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white py-8 shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-2">Church Admin Panel</h1>
                    <p className="text-center text-purple-200">Manage your devotional content with grace</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Video Upload</h2>
                                <Video className="w-8 h-8" />
                            </div>
                            <p className="text-sm mt-2 text-red-100">Share devotional messages</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Video Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={video.title}
                                    onChange={GetVideoData}
                                    placeholder="Enter video title"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Video URL</label>
                                <input
                                    type="text"
                                    name="url"
                                    value={video.url}
                                    onChange={GetVideoData}
                                    placeholder="Enter YouTube/Vimeo URL"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="border-t pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Thumbnail (Optional)</label>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="thumbnail"
                                        value={video.thumbnail}
                                        onChange={GetVideoData}
                                        placeholder="Or paste thumbnail URL"
                                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-sm"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleVideoThumbnailFile}
                                        className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 text-sm"
                                    />
                                </div>

                                {videoThumbnailFile && (
                                    <p className="text-sm text-gray-600 mt-2">Selected: {videoThumbnailFile.name}</p>
                                )}
                            </div>

                            <button
                                onClick={handleVideo}
                                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                            >
                                Upload Video
                            </button>
                            <StatusMessage status={uploadStatus.video || ''} />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Event Poster</h2>
                                <Calendar className="w-8 h-8" />
                            </div>
                            <p className="text-sm mt-2 text-blue-100">Announce church events</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Poster</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={getEventData}
                                        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>
                                {event && (
                                    <p className="text-sm text-gray-600 mt-2">Selected: {event.name}</p>
                                )}
                            </div>
                            <button
                                onClick={handleEvent}
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
                            >
                                Upload Poster
                            </button>
                            <StatusMessage status={uploadStatus.event || ''} />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Promise Word</h2>
                                <Heart className="w-8 h-8" />
                            </div>
                            <p className="text-sm mt-2 text-purple-100">Share God's promises</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Promise</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={getPromiseDetails}
                                        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                    />
                                </div>
                                {promise && (
                                    <p className="text-sm text-gray-600 mt-2">Selected: {promise.name}</p>
                                )}
                            </div>
                            <button
                                onClick={handlePromise}
                                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
                            >
                                Upload Promise
                            </button>
                            <StatusMessage status={uploadStatus.promise || ''} />
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 italic">"Let your light shine before others..." - Matthew 5:16</p>
                </div>
            </div>
        </div>
    );
};

export default ChurchAdminPanel;