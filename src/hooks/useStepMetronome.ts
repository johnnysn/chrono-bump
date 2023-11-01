import NoteValue from "@/types/note-value";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useStepMetronome(
  tempo: number,
  beatCount: number,
  noteValue: NoteValue,
  isPlaying: boolean
): [number | null, Dispatch<SetStateAction<number | null>>] {
  const [activeBeat, setActiveBeat] = useState<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const stepMetronome = () => {
        setActiveBeat((curr) => {
          if (curr == null) return 0;

          return curr < beatCount - 1 ? curr + 1 : 0;
        });
      };

      let period = Math.round((1000 * 60) / tempo);
      if (noteValue == NoteValue.QUAVER) period = Math.round(period / 2);
      else if (noteValue == NoteValue.QUAVER_TRIPLET) period = Math.round(period / 3);

      const intervalId = setInterval(stepMetronome, period);
      stepMetronome(); // Play first click immediately

      return () => clearInterval(intervalId);
    } else {
      setActiveBeat(null);
    }
  }, [tempo, noteValue, beatCount, isPlaying]);

  return [activeBeat, setActiveBeat];
}
