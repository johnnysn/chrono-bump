"use client";

import { ChangeEvent, useState } from "react";
import styles from "./TempoSelector.module.css";
import IncDec from "./IncDec";

interface Props {
  defaultValue: number;
  onTempoChanged: (tempo: number) => void;
}

const MIN_TEMPO = 40;
const MAX_TEMPO = 200;

export default function TempoSelector({ defaultValue, onTempoChanged }: Props) {
  const [tempo, setTempo] = useState(defaultValue);

  const updateValue = (value: number) => {
    if (value < MIN_TEMPO) {
      value = MIN_TEMPO;
    } else if (value > MAX_TEMPO) {
      value = MAX_TEMPO;
    }
    setTempo(value);
    onTempoChanged(value);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let value = +event.target.value;

    updateValue(value);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="leading-none">Tempo</p>

      <div className="mb-4">
        <IncDec
          label={"" + tempo}
          onDec={() => updateValue(tempo - 1)}
          onInc={() => updateValue(tempo + 1)}
        />
      </div>

      <input
        type="range"
        min={MIN_TEMPO}
        max={MAX_TEMPO}
        step={5}
        value={tempo}
        onChange={changeHandler}
        className={`${styles["range"]}`}
      />
    </div>
  );
}
