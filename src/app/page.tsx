"use client";
import Metronome from "@/components/Metronome";
import NoteSelector from "@/components/NoteSelector";
import TempoSelector from "@/components/TempoSelector";
import MetronomeConfig, { Note } from "@/types/metronome-config";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, setConfig] = useState<MetronomeConfig>({
    beatCount: 4,
    tempo: 100,
    noteValue: Note.CROTCHET,
  });

  const playButtonClickHandler = () => {
    setIsPlaying((curr) => !curr);
  };

  const noteChangedHandler = (note: Note) => {
    setConfig((curr) => ({
      ...curr,
      noteValue: note,
    }));
  };

  const tempoChangedHandler = (tempo: number) => {
    setConfig((curr) => ({
      ...curr,
      tempo,
    }));
  };

  return (
    <div className="mt-2 flex flex-col gap-10 items-center">
      <Metronome config={config} isPlaying={isPlaying} />

      <button
        className="rounded px-8 py-2 bg-amber-400 text-gray-50 text-xl font-medium"
        onClick={playButtonClickHandler}
      >
        Play
      </button>

      <NoteSelector onNoteChanged={noteChangedHandler} />

      <TempoSelector onTempoChanged={tempoChangedHandler} defaultValue={100} />
    </div>
  );
}
