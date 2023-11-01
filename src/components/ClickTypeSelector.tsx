"use client";
import ClickType from "@/types/click-type";
import { ChangeEvent, useState } from "react";

interface Props {
  defaultValue: ClickType;
  onClickTypeChanged: (clickType: ClickType) => void;
}

export default function ClickTypeSelector({ defaultValue, onClickTypeChanged }: Props) {
  const [synth, setSynth] = useState(defaultValue === ClickType.SYNTHETIC);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSynth(event.target.checked);
    onClickTypeChanged(event.target.checked ? ClickType.SYNTHETIC : ClickType.RECORDED);
  };

  return (
    <div className="flex flex-col items-center">
      <p>Click type</p>

      <label className="flex items-center gap-1 cursor-pointer">
        <input type="checkbox" className="accent-amber-500" checked={synth} onChange={changeHandler} />
        <span className="text-lg">Use synth beats</span>
      </label>
    </div>
  );
}
