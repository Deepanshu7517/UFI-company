import { Gauge } from "./Gauge";

// components/MachineCard.tsx
interface MachineProps {
  name: string;
  status: 'RUNNING' | 'MIGRATION';
  val1?: number;
  val2?: number;
  lastPM?: string;
}

export const MachineCard = ({ name, status, val1, val2, lastPM }: MachineProps) => {
  const isMigration = status === 'MIGRATION';

  return (
    <div className={`bg-card-bg border ${isMigration ? 'border-border-gray' : 'border-neon-green/30 shadow-[0_0_15px_rgba(34,197,94,0.05)]'} rounded-xl p-6 flex flex-col items-center justify-between min-h-[280px]`}>
      <h2 className="text-neon-green text-xl font-bold tracking-wider mb-4">{name}</h2>
      
      {isMigration ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-blue-300 text-sm font-medium tracking-widest text-center">
            DATA MIGRATION WORK IN PROGRESS
          </p>
        </div>
      ) : (
        <>
          <div className="bg-[#0a2e1f] px-10 py-1 rounded text-center mb-6">
            <p className="text-neon-green text-[10px] font-bold">MACHINE RUNNING</p>
            <p className="text-white font-bold">25</p>
          </div>
          
          <div className="flex gap-8 w-full justify-center">
            <Gauge value={val1 || 0} label="Plan Completed" />
            <Gauge value={val2 || 0} label="Mould Utilization" />
          </div>
          
          <div className="mt-4 w-full">
            <p className="text-[10px] text-gray-500">Last PM: {lastPM}</p>
          </div>
        </>
      )}
    </div>
  );
};