import Beat from "@/types/beat";

interface Props {
  beat: Beat;
  active: boolean;
}

export default function MetronomeBeat({ beat, active }: Props) {
  return (
    <div
      className={`${
        active ? "bg-orange-300" : "bg-transparent"
      } border border-amber-700 bg-amber-400 rounded py-2 px-1 
      flex flex-col gap-1 items-center justify-end 
      w-[50px] h-[60px]
      cursor-pointer`}
    >
      {Array.from(Array(beat.level).keys()).map((l) => (
        <span key={l} className="bg-gray-50 rounded w-full h-3 block"></span>
      ))}
    </div>
  );
}
