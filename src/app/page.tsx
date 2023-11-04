"use client";
import BeatCountSelector from "@/components/BeatCountSelector";
import ClickTypeSelector from "@/components/ClickTypeSelector";
import Metronome from "@/components/Metronome";
import NoteSelector from "@/components/NoteSelector";
import PlayStopButton from "@/components/PlayStopButton";
import TempoSelector from "@/components/TempoSelector";
import ClickType from "@/types/click-type";
import MetronomeConfig from "@/types/metronome-config";
import NoteValue from "@/types/note-value";
import { useReducer, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, dispatch] = useReducer(MetronomeConfig.reducer, {
    beatCount: 4,
    tempo: 100,
    noteValue: NoteValue.CROTCHET,
    clickType: ClickType.RECORDED,
  });

  return (
    <div className="mt-2 flex flex-col items-center">
      <Metronome config={config} isPlaying={isPlaying} />

      <PlayStopButton onPlayStopChanged={setIsPlaying} />

      <div className="flex flex-col gap-5 items-center mt-5">
        {/* Selectors for metronome configuration */}
        <NoteSelector
          onNoteChanged={(noteValue) => dispatch({ type: "setNoteValue", data: { noteValue } })}
          noteValue={config.noteValue}
        />
        <TempoSelector
          onTempoChanged={(tempo) => dispatch({ type: "setTempo", data: { tempo } })}
          tempo={config.tempo}
        />
        <BeatCountSelector
          onBeatCountChanged={(beatCount) => dispatch({ type: "setBeatCount", data: { beatCount } })}
          beatCount={config.beatCount}
        />
        <ClickTypeSelector
          onClickTypeChanged={(clickType) => dispatch({ type: "setClickType", data: { clickType } })}
          clickType={config.clickType}
        />
      </div>
    </div>
  );
}
