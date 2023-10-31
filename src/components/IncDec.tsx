interface Props {
  onInc: () => void;
  onDec: () => void;
  label: string;
}

export default function IncDec({ label, onInc, onDec }: Props) {
  return (
    <div className="flex justify-center gap-2">
      <button onClick={onDec} className="text-6xl px-2">
        -
      </button>
      <p className="text-6xl font-semibold">{label}</p>
      <button onClick={onInc} className="text-6xl px-2">
        +
      </button>
    </div>
  );
}
