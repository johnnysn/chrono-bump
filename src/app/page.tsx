import Metronome from "@/components/Metronome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Metronome
        config={{
          beatCount: 4,
          isPlaying: false,
          tempo: 120,
          noteValue: 1,
        }}
      />
    </div>
  );
}
