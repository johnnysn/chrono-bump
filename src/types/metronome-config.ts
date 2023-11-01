import NoteValue from "./note-value";

export default interface MetronomeConfig {
  beatCount: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  tempo: number;
  noteValue: NoteValue;
  synthetic?: boolean;
}
