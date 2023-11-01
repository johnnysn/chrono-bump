"use client";
import MetronomeConfig from "@/types/metronome-config";
import { useEffect, useState } from "react";
import MetronomeBeat from "./MetronomeBeat";
import useStepMetronome from "@/hooks/useStepMetronome";
import usePlayClickSound from "@/hooks/usePlayClickSound";
import BeatLevel from "@/types/beat-level";

interface Props {
  config: MetronomeConfig;
  isPlaying: boolean;
}

const defaultBeats: BeatLevel[] = [BeatLevel.STRONG, BeatLevel.NORMAL, BeatLevel.NORMAL, BeatLevel.NORMAL];

export default function Metronome({ config, isPlaying }: Props) {
  const [beats, setBeats] = useState<BeatLevel[]>(defaultBeats);
  const [activeBeat, setActiveBeat] = useStepMetronome(
    config.tempo,
    config.beatCount,
    config.noteValue,
    isPlaying
  );
  usePlayClickSound(
    activeBeat,
    activeBeat !== null ? beats[activeBeat] : null,
    config.synthetic || false,
    isPlaying
  );

  useEffect(() => {
    setBeats((curr) => {
      const newBeats = [...curr];

      if (config.beatCount > curr.length) {
        for (let i = curr.length; i < config.beatCount; i++) newBeats.push(BeatLevel.NORMAL);
      } else if (config.beatCount < curr.length) {
        for (let i = curr.length; i > config.beatCount; i--) newBeats.pop();
      }

      return newBeats;
    });
    setActiveBeat(null);
  }, [config.beatCount, setActiveBeat]);

  const beatLevelChanged = (index: number, level: BeatLevel) => {
    beats[index] = level;
  };

  return (
    <div className="flex justify-center gap-1 md:gap-4">
      {beats.map((b, index) => (
        <MetronomeBeat
          key={index}
          defaultBeatLevel={b}
          onBeatLevelChanged={(level) => beatLevelChanged(index, level)}
          active={activeBeat == index}
        />
      ))}
    </div>
  );
}
