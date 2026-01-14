import { RefreshCcw, X } from 'lucide-preact';
// pages/FGPrinting.tsx
export const FGPrinting = () => (
  <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-full animate-in fade-in zoom-in duration-300">
    <div className="p-8 border-b border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/50">
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Select Model</label>
        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm">
          <option>G20 Industrial Core</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Scan QR Code</label>
        <input type="text" placeholder="Awaiting scan..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm" />
      </div>
    </div>

    <div className="flex-1 p-6 overflow-hidden">
      <div className="rounded-2xl border border-slate-200 h-full overflow-auto shadow-inner bg-slate-50">
        <table className="w-full text-left text-sm">
          <thead className="bg-white border-b border-slate-200 sticky top-0">
            <tr>
              <th className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-wider">Station</th>
              <th className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-wider">Parent QR</th>
              <th className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3].map(i => (
              <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                <td className="px-6 py-4 font-medium">ST-00{i}</td>
                <td className="px-6 py-4 text-slate-500 font-mono">#QR-8829-00{i}</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Ready</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
      <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 transition-all text-xs uppercase tracking-tight">
        <RefreshCcw size={16} /> Reset
      </button>
      <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all text-xs uppercase tracking-tight">
        Confirm & Print
      </button>
    </div>
  </div>
);