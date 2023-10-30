import Beat from "@/types/beat";
import { useEffect } from "react";

export default function usePlayClickSound(
  beats: Beat[],
  activeBeatIndex: number | null,
  isPlaying: boolean
) {
  useEffect(() => {
    // TODO Play click sound
    if (activeBeatIndex != null && isPlaying) {
      console.log(`Beat ${beats[activeBeatIndex].level}!`);
    }
  }, [beats, activeBeatIndex, isPlaying]);
}
