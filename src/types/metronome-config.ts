import NoteValue from "./note-value";

export default interface MetronomeConfig {
  beatCount: number;
  tempo: number;
  noteValue: NoteValue;
  synthetic?: boolean;
}
