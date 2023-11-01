"use client";
import NoteValue from "@/types/note-value";
import Image from "next/image";
import { useState } from "react";

interface Props {
  onNoteChanged: (note: NoteValue) => void;
}

export default function NoteSelector({ onNoteChanged }: Props) {
  const [note, setNote] = useState(NoteValue.CROTCHET);

  let src = "/seminima.svg";
  let name = "Crotchet";

  if (note === NoteValue.QUAVER) {
    name = "Quaver";
    src = "/colcheia.svg";
  } else if (note == NoteValue.QUAVER_TRIPLET) {
    name = "Quaver (Triplet)";
    src = "/colcheia-3.svg";
  }

  const clickHandler = () => {
    let next = NoteValue.CROTCHET;
    if (note === NoteValue.CROTCHET) next = NoteValue.QUAVER;
    else if (note === NoteValue.QUAVER) next = NoteValue.QUAVER_TRIPLET;

    onNoteChanged(next);
    setNote(next);
  };

  return (
    <div className="cursor-pointer flex flex-col items-center" onClick={clickHandler}>
      <p>Note value</p>
      <Image src={src} width={48} height={73} alt="Nota" className="mb-2" />
      <p className="text-xl">{name}</p>
    </div>
  );
}
