"use client";
import Metronome from "@/components/Metronome";
import { Note } from "@/types/metronome-config";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playButtonClickHandler = () => {
    setIsPlaying((curr) => !curr);
  };

  return (
    <div className="mt-2 flex flex-col gap-8 items-center">
      <Metronome
        config={{
          beatCount: 4,
          tempo: 120,
          noteValue: Note.CROTCHET,
        }}
        isPlaying={isPlaying}
      />

      <button
        className="rounded px-8 py-2 bg-amber-400 text-gray-50 text-xl font-medium"
        onClick={playButtonClickHandler}
      >
        Play
      </button>
    </div>
  );
}
