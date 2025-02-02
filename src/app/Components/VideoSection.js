"use client"
import React, { useState, useEffect } from 'react';
import VideoPlayer from "./VideoCardSection";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [itemWidth, setItemWidth] = useState(352); // Default width
    const [gapWidth, setGapWidth] = useState(40); // Default gap

    const videos = [
        { id: 1, url: "/cardicare1.mp4" },
        { id: 2, url: "/cardicare2.mp4" },
        { id: 3, url: "/cardicare3.mp4" },
        { id: 4, url: "/cardicare4.mp4" },
        { id: 5, url: "/cardicare5.mp4" },
        { id: 6, url: "/cardicare6.mp4" },
        { id: 7, url: "/cardicare7.mp4" },
        { id: 8, url: "/cardicare8.mp4" },
        { id: 9, url: "/cardicare9.mp4" },
    ];

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            const isTablet = window.innerWidth < 1024;

            // Set items per page
            if (isMobile) {
                setItemsPerPage(1);
                setItemWidth(window.innerWidth * 0.85);
                setGapWidth(0);
            } else if (isTablet) {
                setItemsPerPage(2);
                setItemWidth(352);
                setGapWidth(40);
            } else {
                setItemsPerPage(3);
                setItemWidth(352);
                setGapWidth(40);
            }
        };

        // Initial calculation
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            Math.min(videos.length - itemsPerPage, prevIndex + 1)
        );
    };

    const isFirstPage = currentIndex === 0;
    const isLastPage = currentIndex >= videos.length - itemsPerPage;

    return (
        <div className="w-full py-8 sm:py-12 md:py-16 flex flex-col gap-5 bg-rose-600 bg-opacity-60 items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium w-[90%] md:w-[70%] lg:w-[50%] text-center leading-tight px-4">
                Cardiac Care Videos: Expert Guidance for a Healthy Heart
            </h1>
            
            <div className="relative w-full md:w-[90%] mt-4 sm:mt-8">
                {/* Navigation Buttons */}
                <button 
                    onClick={handlePrevious}
                    disabled={isFirstPage}
                    className={`absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full text-white transition-all
                        ${isFirstPage 
                            ? 'bg-gray-400 cursor-not-allowed opacity-50' 
                            : 'bg-black bg-opacity-50 hover:bg-opacity-75'
                        }`}
                >
                    <ChevronLeft size={24} className="md:w-8 md:h-8" />
                </button>
                
                <button 
                    onClick={handleNext}
                    disabled={isLastPage}
                    className={`absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full text-white transition-all
                        ${isLastPage 
                            ? 'bg-gray-400 cursor-not-allowed opacity-50' 
                            : 'bg-black bg-opacity-50 hover:bg-opacity-75'
                        }`}
                >
                    <ChevronRight size={24} className="md:w-8 md:h-8" />
                </button>

                {/* Videos Container */}
                <div className="overflow-hidden px-4 md:px-0">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * (itemWidth + gapWidth)}px)`
                        }}
                    >
                        {videos.map((video, index) => (
                            <div 
                                key={video.id}
                                className="flex-shrink-0 px-2 md:px-4"
                                style={{
                                    width: itemWidth + 'px'
                                }}
                            >
                                <VideoPlayer 
                                    videoUrl={video.url}
                                    isActive={index === currentIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Pagination Indicator */}
            <div className="flex md:hidden gap-2 mt-4">
                {videos.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${index === currentIndex 
                                ? 'bg-white w-4' 
                                : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}