"use client";
import Beat from "@/types/beat";
import MetronomeConfig from "@/types/metronome-config";
import { useEffect, useState } from "react";
import MetronomeBeat from "./MetronomeBeat";

interface Props {
  config: MetronomeConfig;
}

const defaultBeat: Beat = {
  level: 1,
};

export default function Metronome({ config }: Props) {
  const [beats, setBeats] = useState<Beat[]>([{ ...defaultBeat }]);
  const [activeBeat, setActiveBeat] = useState<number | null>(null);

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
    <div className="flex justify-center gap-2">
      {beats.map((b, index) => (
        <MetronomeBeat key={index} beat={b} active={activeBeat == index} />
      ))}
    </div>
  );
}
