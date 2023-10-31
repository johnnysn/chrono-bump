import recordedClickService from "@/services/recorded-click-service";
import synthClickService from "@/services/synth-click-service";
import Beat from "@/types/beat";
import { useEffect } from "react";

export default function usePlayClickSound(
  beats: Beat[],
  activeBeatIndex: number | null,
  synthetic: boolean,
  isPlaying: boolean
) {
  useEffect(() => {
    if (activeBeatIndex != null && isPlaying) {
      const level = beats[activeBeatIndex].level;
      if (synthetic) synthClickService.play(level);
      else recordedClickService.play(level);
    }
  }, [beats, activeBeatIndex, isPlaying, synthetic]);
}
