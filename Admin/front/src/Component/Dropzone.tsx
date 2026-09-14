import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, X, Check } from 'lucide-react';

interface DropzoneProps {
  label: string;
  sublabel?: string;
  file: File | null;
  onFileSelect: (file: File | null) => void;
  externalPreviewUrl?: string;
  accentColor?: 'emerald' | 'amber' | 'blue' | 'rose';
  maxSizeMB?: number;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  label,
  sublabel = 'PNG, JPG, or WEBP (Max 10MB)',
  file,
  onFileSelect,
  externalPreviewUrl,
  accentColor = 'emerald',
  maxSizeMB = 10,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (externalPreviewUrl) {
      setPreviewUrl(externalPreviewUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [file, externalPreviewUrl]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateAndSelect = (candidate: File) => {
    if (candidate.size > maxSizeMB * 1024 * 1024) {
      alert(`File size exceeds maximum allowed limit of ${maxSizeMB}MB.`);
      return;
    }
    onFileSelect(candidate);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const selected = e.dataTransfer.files[0];
      if (selected.type.startsWith('image/')) {
        validateAndSelect(selected);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSelect(e.target.files[0]);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const borderActiveMap = {
    emerald: 'border-emerald-500 bg-emerald-50/60',
    amber: 'border-amber-500 bg-amber-50/60',
    blue: 'border-blue-500 bg-blue-50/60',
    rose: 'border-rose-500 bg-rose-50/60',
  };

  const iconColorMap = {
    emerald: 'text-emerald-600 bg-emerald-100/80',
    amber: 'text-amber-600 bg-amber-100/80',
    blue: 'text-blue-600 bg-blue-100/80',
    rose: 'text-rose-600 bg-rose-100/80',
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/jpg"
        onChange={handleFileChange}
        className="hidden"
      />

      {previewUrl ? (
        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-sm">
          <div className="relative aspect-video sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-100">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-2.5 flex items-center justify-between px-1">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-800 truncate">
                  {file ? file.name : 'Selected Image'}
                </p>
                {file && (
                  <p className="text-[11px] text-slate-500">
                    {formatFileSize(file.size)}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Change
              </button>
              <button
                type="button"
                onClick={clearFile}
                className="p-1 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors"
                title="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`cursor-pointer border-2 border-dashed rounded-xl p-5 text-center transition-all flex flex-col items-center justify-center gap-2.5 ${
            isDragging
              ? borderActiveMap[accentColor]
              : 'border-slate-300 hover:border-slate-400 bg-slate-50/70 hover:bg-slate-50'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColorMap[accentColor]}`}
          >
            <UploadCloud className="w-5 h-5" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-800">{label}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Drag & drop image here, or <span className="text-blue-600 font-medium underline">browse</span>
            </p>
          </div>

          <span className="text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
            {sublabel}
          </span>
        </div>
      )}
    </div>
  );
};
