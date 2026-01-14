import { useState, useMemo } from 'preact/hooks';
import { 
  Search, FileDown, RefreshCcw, Filter, 
  Settings2, Check, ChevronDown, Table as TableIcon 
} from 'lucide-preact';

export const ReportPage = () => {
  // --- 1. STATE MANAGEMENT ---
  const [searchTerm, setSearchTerm] = useState('');
  const [showColumnDropdown, setShowColumnDropdown] = useState(false);
  const [reportType, setReportType] = useState('FG Report');
  
  // Dynamic Column Visibility State
  const [visibleColumns, setVisibleColumns] = useState({
    model: true,
    fgPart: true,
    custPart: true,
    barcode: true,
    station: true,
    status: true,
    date: true,
  });

  // --- 2. MOCK DATA GENERATOR (Dynamic JS) ---
  const rawData = useMemo(() => [
    { id: 1, model: 'G20', fgPart: '1W.65.179.20', custPart: '0303DBG', barcode: '0318001062', station: 'Station-01', status: 'PASS', date: '2025-06-06' },
    { id: 2, model: 'K10', fgPart: '2W.88.140.11', custPart: '0404XRT', barcode: '0992110443', station: 'Station-04', status: 'FAIL', date: '2025-06-07' },
    { id: 3, model: 'G20', fgPart: '1W.65.179.20', custPart: '0303DBG', barcode: '0318001088', station: 'Station-02', status: 'PASS', date: '2025-06-06' },
    { id: 4, model: 'G20', fgPart: '3W.12.100.05', custPart: '0909ZZZ', barcode: '1122334455', station: 'Station-01', status: 'PASS', date: '2025-06-08' },
    { id: 5, model: 'K10', fgPart: '2W.88.140.11', custPart: '0404XRT', barcode: '0992110999', station: 'Station-03', status: 'PASS', date: '2025-06-07' },
  ], []);

  // --- 3. DYNAMIC FILTERING LOGIC ---
  const filteredData = rawData.filter(item => 
    Object.values(item).some(val => 
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // --- 4. HANDLERS ---
  const toggleColumn = (key: keyof typeof visibleColumns) => {
    setVisibleColumns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExport = () => {
    console.log("Processing Data for Export...", filteredData);
    alert(`Exporting ${filteredData.length} records to CSV...`);
  };

  const handleReset = () => {
    setSearchTerm('');
    setReportType('FG Report');
    alert("Filters Reset");
  };
const handleReportTypeChange = (type: string) => {
    setReportType(type);
    // Dynamic JS: Auto-show Machine ID column if "Trace Off" is selected
    if (type === 'Trace Off') {
      setVisibleColumns(prev => ({ ...prev, machineId: true }));
    } else {
      setVisibleColumns(prev => ({ ...prev, machineId: false }));
    }
  };
  return (
    <div className="h-full w-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
      
      {/* SECTION 1: Main Global Filter Panel */}
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 shrink-0">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
              <Filter size={18} className="text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-700">Report Engine</h2>
          </div>
          <span className="max-md:text-[10px] font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">
            Live Mode
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-1.5">
            <label className="max-md:text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Model Selection</label>
            <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all">
              <option>All Models</option>
              <option>G20</option>
              <option>K10</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="max-md:text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">From Date</label>
            <input type="date" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold outline-none" defaultValue="2025-06-06" />
          </div>

          <div className="space-y-1.5">
            <label className="max-md:text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">To Date</label>
            <input type="date" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold outline-none" defaultValue="2025-06-06" />
          </div>

          <div className="flex flex-col justify-end gap-2">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl border border-slate-100">
              {['FG Report', 'Sub Assembly', "Trace OFF"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="reportType" 
                    checked={reportType === type}
                    onChange={() => setReportType(type)}
                    className="w-3.5 h-3.5 text-blue-600 border-slate-300 focus:ring-blue-500" 
                  />
                  <span className="max-md:text-[10px] font-bold text-slate-600 uppercase transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-slate-100 pt-6">
          <div className="flex-1 min-w-[300px] space-y-1.5">
            <label className="max-md:text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Universal Search</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                value={searchTerm}
                onInput={(e) => setSearchTerm(e.currentTarget.value)}
                placeholder="Search by barcode, model, or station..." 
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all shadow-inner" 
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={handleExport} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white max-md:text-[10px] font-bold uppercase tracking-wider hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">
              <FileDown size={14} /> Export CSV
            </button>
            <button onClick={handleReset} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white max-md:text-[10px] font-bold uppercase tracking-wider hover:bg-slate-900 active:scale-95 transition-all">
              <RefreshCcw size={14} /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Table Header & Column Customizer */}
      <div className="flex items-center justify-between px-2 shrink-0">
        <div className="flex items-center gap-2">
          <TableIcon size={16} className="text-slate-400" />
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            Dataset: <span className="text-blue-600">{filteredData.length} Results</span>
          </span>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowColumnDropdown(!showColumnDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm max-md:text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:border-blue-400 transition-all"
          >
            <Settings2 size={14} /> Column Visibility <ChevronDown size={12} className={showColumnDropdown ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </button>

          {showColumnDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl z-[60] p-2 animate-in zoom-in-95 duration-100">
              <div className="px-3 py-2 text-[9px] font-black text-slate-400 uppercase border-b border-slate-50 mb-1">Toggle Fields</div>
              {Object.keys(visibleColumns).map((key) => (
                <button 
                  key={key}
                  onClick={() => toggleColumn(key as any)}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors text-left"
                >
                  <span className="text-[11px] font-bold text-slate-600 capitalize">{key}</span>
                  {visibleColumns[key as keyof typeof visibleColumns] && <Check size={14} className="text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SECTION 3: Dynamic Data Table */}
      <div className="flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-96">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 bg-slate-900 text-white z-10">
              <tr>
                {visibleColumns.model && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800">Model</th>}
                {visibleColumns.fgPart && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800">FG Part No</th>}
                {visibleColumns.custPart && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800">Cust Part</th>}
                {visibleColumns.barcode && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800">Barcode</th>}
                {visibleColumns.station && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800">Station</th>}
                {visibleColumns.status && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest border-r border-slate-800 text-center">Status</th>}
                {visibleColumns.date && <th className="px-6 py-4 max-md:text-[10px] font-bold uppercase tracking-widest">Created On</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-blue-50/50 transition-colors group">
                  {visibleColumns.model && <td className="px-6 py-4 text-xs md:text-sm font-bold text-slate-700">{row.model}</td>}
                  {visibleColumns.fgPart && <td className="px-6 py-4 text-xs md:text-sm text-slate-500 font-mono">{row.fgPart}</td>}
                  {visibleColumns.custPart && <td className="px-6 py-4 text-xs md:text-sm text-slate-500 font-mono">{row.custPart}</td>}
                  {visibleColumns.barcode && <td className="px-6 py-4 text-xs md:text-sm text-slate-500 font-mono">{row.barcode}</td>}
                  {visibleColumns.station && <td className="px-6 py-4 text-xs md:text-sm font-semibold text-blue-600">{row.station}</td>}
                  {visibleColumns.status && (
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-md text-xs md:text-sm font-black uppercase shadow-sm ${
                        row.status === 'PASS' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  )}
                  {visibleColumns.date && <td className="px-6 py-4 text-xs md:text-sm text-slate-400">{row.date}</td>}
                </tr>
              )) : (
                <tr>
                  <td colSpan={7} className="px-6 py-20 text-center text-slate-400 font-medium italic">
                    No records found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};