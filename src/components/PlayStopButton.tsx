"use client";
import { Play, Square } from "lucide-react";
import { useState } from "react";

interface Props {
  onPlayStopChanged: (isPlaying: boolean) => void;
}

export default function PlayStopButton({ onPlayStopChanged }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playButtonClickHandler = () => {
    const newIsPlayingState = !isPlaying;
    setIsPlaying(newIsPlayingState);
    onPlayStopChanged(newIsPlayingState);
  };

  const playClassName = "bg-amber-500";
  const playContent = (
    <>
      <Play width={18} /> <span>Play</span>
    </>
  );

  const stopClassName = "bg-red-500";
  const stopContent = (
    <>
      <Square width={14} className="mr-1" /> <span>Stop</span>
    </>
  );

  return (
    <button
      className={`
        ${isPlaying ? stopClassName : playClassName} 
        rounded py-2 w-[112px]  text-gray-50 text-xl font-medium 
        flex justify-center items-center
      `}
      onClick={playButtonClickHandler}
    >
      {isPlaying ? stopContent : playContent}
    </button>
  );
}
