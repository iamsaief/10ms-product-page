"use client";

import Image from "next/image";
import { useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  title?: string;
}

export default function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the user has initiated playback

  // Extract a YouTube video ID from multiple URL formats
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null; // Return ID only if valid
  };

  const videoId = getYouTubeId(videoUrl);

  // fallback UI for invalid video ID
  if (!videoId) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">Invalid video URL</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      {/* Render the thumbnail with a play button overlay until clicked */}
      {!isPlaying ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)} // Trigger video playback
        >
          <Image
            src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} // Use custom thumbnail or YouTube fallback
            width={400}
            height={225}
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay with centered play button that animates on hover */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
            <div className="w-15 h-15 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Once clicked, render the embedded YouTube player with autoplay
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title || "Course trailer"}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
