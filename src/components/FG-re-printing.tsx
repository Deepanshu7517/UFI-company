import { useState } from 'react';
import { X, Printer, Scan, RefreshCcw, CheckCircle2 } from 'lucide-preact';

export const FGReprintModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = (e: any) => {
    e.preventDefault();
    // Simulate printing logic
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Glass Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <Printer size={20} className="text-blue-400" />
            <h2 className="text-sm font-bold uppercase tracking-widest">FG Re-Printing</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handlePrint} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
              Enter Details:
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Scan size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input 
                type="text" 
                autoFocus
                placeholder="Scan FG / Parent Barcode*" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all text-xs uppercase"
            >
              <RefreshCcw size={14} /> Reset
            </button>
            <button 
              type="submit"
              className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-blue-600 font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all text-xs uppercase"
            >
              <Printer size={14} /> Print
            </button>
          </div>
        </form>

        {/* Success Popup (SatoApps Style) */}
        {isSuccess && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 w-80 text-center space-y-4 border-t-4 border-t-blue-500">
              <div className="flex justify-center">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <CheckCircle2 size={32} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">SatoApps</h3>
                <p className="text-sm text-slate-500">Re-Print Successfully!!</p>
              </div>
              <button 
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="w-full py-2 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase hover:bg-blue-600 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};