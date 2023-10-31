import clickService from "@/services/click-service";
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
      if (synthetic) clickService.playSynthetic(level);
      else clickService.playRecorded(level);
    }
  }, [beats, activeBeatIndex, isPlaying]);
}
