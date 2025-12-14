"use client";

import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideType } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const dummyImages = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
];

export default function ResponsiveGallery() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef<SplideType | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile view
  if (isMobile) {
    return (
      <div className="w-full  text-white flex flex-col items-center">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            pagination: false,
            arrows: false,
            gap: "1rem",
          }}
          onMoved={(_, newIndex: number) => {
            setCurrentIndex(newIndex % dummyImages.length);
          }}
        >
          {dummyImages.map((img, i) => (
            <SplideSlide key={i}>
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg max-w-[300px] mx-auto"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-6">
          <button
            onClick={() => splideRef.current?.go("<")}
            className="flex items-center gap-2 uppercase tracking-wider transition-colors duration-200 hover:text-gray-400 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>

          {/* Progress Bar */}
          <div className="relative mx-auto bg-gray-600 w-[200px]" style={{ height: "1px" }}>
            <div
              className="absolute bg-[#b3dcd4] transition-all duration-300 ease-in-out"
              style={{
                height: "8px",
                width: `${100 / dummyImages.length}%`,
                left: `${(currentIndex / dummyImages.length) * 100}%`,
                top: "-2px",
              }}
            ></div>
          </div>

          <button
            onClick={() => splideRef.current?.go(">")}
            className="flex items-center gap-2 uppercase tracking-wider transition-colors duration-200 hover:text-gray-400 cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="mt-2 text-sm">{currentIndex + 1} / {dummyImages.length}</div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="w-full text-white flex flex-col items-center">
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 1,
          pagination: false,
          arrows: false,
          gap: "1rem",
        }}
        onMoved={(_, newIndex: number) => {
          setCurrentIndex(newIndex % dummyImages.length);
        }}
      >
        {dummyImages.map((img, i) => (
          <SplideSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-lg max-w-[600px] mx-auto"
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          onClick={() => splideRef.current?.go("<")}
          className="flex items-center gap-2 uppercase tracking-wider text-gray-900 duration-200 hover:text-gray-400 cursor-pointer"
        >
          <ChevronLeftIcon /> Next
        </button>

        {/* Progress Bar */}
        <div className="relative mx-auto bg-gray-600 w-[200px]" style={{ height: "1px" }}>
          <div
            className="absolute bg-[#b3dcd4] transition-all duration-300 ease-in-out"
            style={{
              height: "8px",
              width: `${100 / dummyImages.length}%`,
              left: `${(currentIndex / dummyImages.length) * 100}%`,
              top: "-2px",
            }}
          ></div>
        </div>

        <button
          onClick={() => splideRef.current?.go(">")}
          className="flex items-center gap-2 uppercase tracking-wider text-gray-900 duration-200 hover:text-gray-400 cursor-pointer"
        >
          Previous <ChevronRightIcon />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="mt-2 text-sm">{currentIndex + 1} / {dummyImages.length}</div>
    </div>
  );
}
