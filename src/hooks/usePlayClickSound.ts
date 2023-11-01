import recordedClickService from "@/services/recorded-click-service";
import synthClickService from "@/services/synth-click-service";
import BeatLevel from "@/types/beat-level";
import { useEffect } from "react";

export default function usePlayClickSound(
  activeBeatIndex: number | null,
  level: BeatLevel | null,
  synthetic: boolean,
  isPlaying: boolean
) {
  useEffect(() => {
    if (activeBeatIndex !== null && level !== null && isPlaying) {
      if (synthetic) synthClickService.play(level);
      else recordedClickService.play(level);
    }
  }, [activeBeatIndex, level, isPlaying, synthetic]);
}
