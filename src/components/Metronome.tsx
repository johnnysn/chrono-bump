"use client";
import Beat from "@/types/beat";
import MetronomeConfig from "@/types/metronome-config";
import { useEffect, useState } from "react";
import MetronomeBeat from "./MetronomeBeat";
import useStepMetronome from "@/hooks/useStepMetronome";
import usePlayClickSound from "@/hooks/usePlayClickSound";

interface Props {
  config: MetronomeConfig;
  isPlaying: boolean;
}

const defaultBeat: Beat = {
  level: 2,
};

const defaultBeats: Beat[] = [
  { level: 3 },
  { ...defaultBeat },
  { ...defaultBeat },
  { ...defaultBeat },
];

export default function Metronome({ config, isPlaying }: Props) {
  const [beats, setBeats] = useState<Beat[]>(defaultBeats);
  const [activeBeat, setActiveBeat] = useStepMetronome(
    config.tempo,
    config.beatCount,
    config.noteValue,
    isPlaying
  );
  usePlayClickSound(beats, activeBeat, config.synthetic || false, isPlaying);

  useEffect(() => {
    setBeats((curr) => {
      const newBeats = [...curr];

      if (config.beatCount > curr.length) {
        for (let i = curr.length; i < config.beatCount; i++) newBeats.push({ ...defaultBeat });
      } else if (config.beatCount < curr.length) {
        for (let i = curr.length; i > config.beatCount; i--) newBeats.pop();
      }

      return newBeats;
    });
    setActiveBeat(null);
  }, [config.beatCount]);

  return (
    <div className="flex justify-center gap-1 md:gap-4">
      {beats.map((b, index) => (
        <MetronomeBeat key={index} beat={b} active={activeBeat == index} />
      ))}
    </div>
  );
}
