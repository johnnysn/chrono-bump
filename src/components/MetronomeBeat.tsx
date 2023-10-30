"use client";
import Beat from "@/types/beat";
import { useState } from "react";

interface Props {
  beat: Beat;
  active: boolean;
}

export default function MetronomeBeat({ beat, active }: Props) {
  const [bars, setBars] = useState(beat.level);

  const clickHandler = () => {
    beat.level = (beat.level === 3 ? 1 : beat.level + 1) as 1 | 2 | 3;
    setBars(beat.level);
  };

  return (
    <div
      className={`${
        active ? "bg-cyan-400" : "bg-transparent"
      } border border-cyan-600 rounded py-2 px-1 md:px-2 md:py-3 
      flex flex-col gap-1 items-center justify-end 
      w-[50px] md:w-[80px] h-[60px] md:h-[80px]
      cursor-pointer`}
      onClick={clickHandler}
    >
      {Array.from(Array(bars).keys()).map((l) => (
        <span
          key={l}
          className={`${active ? "bg-gray-50" : "bg-cyan-600"} rounded w-full h-3 block`}
        ></span>
      ))}
    </div>
  );
}
