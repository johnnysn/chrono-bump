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
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, setConfig] = useState<MetronomeConfig>({
    beatCount: 4,
    tempo: 100,
    noteValue: NoteValue.CROTCHET,
    clickType: ClickType.RECORDED,
  });

  const noteChangedHandler = (noteValue: NoteValue) =>
    setConfig((curr) => ({
      ...curr,
      noteValue,
    }));

  const tempoChangedHandler = (tempo: number) =>
    setConfig((curr) => ({
      ...curr,
      tempo,
    }));

  const beatCountChangedHandler = (beatCount: number) =>
    setConfig((curr) => ({
      ...curr,
      beatCount,
    }));

  const clickTypeChangedHandler = (clickType: ClickType) =>
    setConfig((curr) => ({
      ...curr,
      clickType,
    }));

  return (
    <div className="mt-2 flex flex-col gap-5 items-center">
      <Metronome config={config} isPlaying={isPlaying} />

      <PlayStopButton onPlayStopChanged={setIsPlaying} />

      <NoteSelector onNoteChanged={noteChangedHandler} />

      <TempoSelector onTempoChanged={tempoChangedHandler} defaultValue={100} />

      <BeatCountSelector onBeatCountChanged={beatCountChangedHandler} defaultValue={4} />

      <ClickTypeSelector onClickTypeChanged={clickTypeChangedHandler} defaultValue={ClickType.RECORDED} />
    </div>
  );
}
