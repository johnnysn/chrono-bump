"use client";
import { ChangeEvent } from "react";
import styles from "./TempoSelector.module.css";
import IncDec from "./IncDec";
import MetronomeConfig from "@/types/metronome-config";

interface Props {
  tempo: number;
  onTempoChanged: (tempo: number) => void;
}

export default function TempoSelector({ tempo, onTempoChanged }: Props) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let value = +event.target.value;

    onTempoChanged(value);
  };

  return (
    <div className="flex flex-col items-center mb-2">
      <p className="leading-none">Tempo (BPM)</p>

      <div className="mb-4">
        <IncDec
          label={"" + tempo}
          onDec={() => onTempoChanged(tempo - 1)}
          onInc={() => onTempoChanged(tempo + 1)}
        />
      </div>

      <input
        type="range"
        min={MetronomeConfig.MIN_TEMPO}
        max={MetronomeConfig.MAX_TEMPO}
        step={5}
        value={tempo}
        onChange={changeHandler}
        className={`${styles["range"]}`}
      />
    </div>
  );
}
