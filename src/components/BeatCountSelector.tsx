"use client";
import { useState } from "react";
import IncDec from "./IncDec";

interface Props {
  defaultValue: number;
  onBeatCountChanged: (beatCount: number) => void;
}

export default function BeatCountSelector({ defaultValue, onBeatCountChanged }: Props) {
  const [beatCount, setBeatCount] = useState(defaultValue);

  const updateValue = (value: number) => {
    if (value < 1) value = 1;
    else if (value > 7) value = 7;
    setBeatCount(value);
    onBeatCountChanged(value);
  };

  return (
    <div className="flex flex-col items-center">
      <p>Number of beats</p>

      <IncDec
        label={"" + beatCount}
        onInc={() => updateValue(beatCount + 1)}
        onDec={() => updateValue(beatCount - 1)}
      />
    </div>
  );
}
