"use client";
import Image from "next/image";
import { Note } from "@/types/metronome-config";
import { useState } from "react";

interface Props {
  onNoteChanged: (note: Note) => void;
}

export default function NoteSelector({ onNoteChanged }: Props) {
  const [note, setNote] = useState(Note.CROTCHET);

  let src = "/seminima.svg";
  let name = "Crotchet";

  if (note === Note.QUAVER) {
    name = "Quaver";
    src = "/colcheia.svg";
  } else if (note == Note.QUAVER_TRIPLET) {
    name = "Quaver (Triplet)";
    src = "/colcheia-3.svg";
  }

  const clickHandler = () => {
    let next = Note.CROTCHET;
    if (note === Note.CROTCHET) next = Note.QUAVER;
    else if (note === Note.QUAVER) next = Note.QUAVER_TRIPLET;

    onNoteChanged(next);
    setNote(next);
  };

  return (
    <div className="cursor-pointer flex flex-col items-center gap-2" onClick={clickHandler}>
      <Image src={src} width={54} height={82} alt="Nota" />
      <p className="text-lg">{name}</p>
    </div>
  );
}
