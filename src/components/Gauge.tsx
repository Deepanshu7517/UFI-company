// components/Gauge.tsx
export const Gauge = ({ value, label }: { value: number; label: string }) => {
  const radius = 40;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 200) * circumference; // Simple mapping

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="60" viewBox="0 0 100 60">
        {/* Background Track */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#1f2937"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Progress Track */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#22c55e"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
        <text x="50" y="45" textAnchor="middle" fill="white" className="text-lg font-bold">
          {value}
        </text>
      </svg>
      <span className="text-[10px] uppercase text-gray-400 mt-1">{label}</span>
    </div>
  );
};