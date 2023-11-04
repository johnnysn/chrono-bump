"use client";
import NoteValue from "@/types/note-value";
import Image from "next/image";

interface Props {
  noteValue: NoteValue;
  onNoteChanged: (note: NoteValue) => void;
}

export default function NoteSelector({ noteValue, onNoteChanged }: Props) {
  let src = "/seminima.svg";
  let name = "Crotchet";

  if (noteValue === NoteValue.QUAVER) {
    name = "Quaver";
    src = "/colcheia.svg";
  } else if (noteValue == NoteValue.QUAVER_TRIPLET) {
    name = "Quaver (Triplet)";
    src = "/colcheia-3.svg";
  }

  const clickHandler = () => {
    let next = NoteValue.CROTCHET;
    if (noteValue === NoteValue.CROTCHET) next = NoteValue.QUAVER;
    else if (noteValue === NoteValue.QUAVER) next = NoteValue.QUAVER_TRIPLET;

    onNoteChanged(next);
  };

  return (
    <div className="cursor-pointer flex flex-col items-center" onClick={clickHandler}>
      <p>Note value</p>
      <Image src={src} width={48} height={73} alt="Nota" className="mb-2" />
      <p className="text-xl">{name}</p>
    </div>
  );
}
