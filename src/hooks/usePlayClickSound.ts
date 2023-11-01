import recordedClickService from "@/services/recorded-click-service";
import synthClickService from "@/services/synth-click-service";
import BeatLevel from "@/types/beat-level";
import ClickType from "@/types/click-type";
import { useEffect } from "react";

export default function usePlayClickSound(
  activeBeatIndex: number | null,
  level: BeatLevel | null,
  clickType: ClickType,
  isPlaying: boolean
) {
  useEffect(() => {
    if (activeBeatIndex !== null && level !== null && isPlaying) {
      if (clickType === ClickType.SYNTHETIC) synthClickService.play(level);
      else recordedClickService.play(level);
    }
  }, [activeBeatIndex, level, isPlaying, clickType]);
}
