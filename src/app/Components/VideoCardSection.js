"use client"
import React, { useState } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser] = useState('User123');

  return (
    <div className="w-auto">
      {/* Video Player - Portrait Format */}
      <div className="flex justify-center">
        <div className="relative"> 
          <video 
            className="rounded-lg shadow-lg mx-auto h-[28rem] max-h-[80vh] object-contain"
            controls
            src={videoUrl || "/cardicare.MP4"}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;