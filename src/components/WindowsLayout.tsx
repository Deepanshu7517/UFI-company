import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Key, Minus, Power } from 'lucide-preact';
// components/WindowsLayout.tsximport { Link, useLocation, useNavigate } from 'react-router-dom';

export const WindowsLayout = ({ children }: { children: any }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Logic to determine if we are in a nested route (e.g., /transaction/fg-printing)
  // We check if the path has more than one segment after the initial slash
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const isNestedRoute = pathSegments.length > 1;

  const navItems = [
    { name: 'Master', path: '/master' },
    { name: 'Transaction', path: '/transaction' },
    { name: 'Report', path: '/report' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-[#F4F7FA] overflow-hidden text-slate-900 font-sans">
      
      {/* 1. Header with integrated Change Password Option */}
      <header className="bg-slate-900 text-white h-14 flex items-center justify-between px-4 shrink-0 shadow-lg z-20">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-600/30">UFI</div>
          <h1 className="font-bold tracking-tight text-slate-400 hidden sm:block uppercase text-[10px]">Industrial Terminal</h1>
        </div>
        
        <h1 className="absolute left-1/2 -translate-x-1/2 font-extrabold tracking-[0.15em] text-sm text-blue-400 uppercase">
          {pathSegments[pathSegments.length - 1]?.replace('-', ' ') || 'MAIN MENU'}
        </h1>

        {/* Re-integrated Action Buttons */}
        <div className="flex items-center gap-1 md:gap-4">
          <button className="flex flex-col items-center hover:bg-slate-800 px-3 py-1 rounded-md transition-colors group">
            <Key size={16} className="group-hover:text-blue-400" />
            <span className="text-[9px] mt-0.5 text-slate-300">Change Password</span>
          </button>
          
          <button className="flex flex-col items-center hover:bg-slate-800 px-3 py-1 rounded-md transition-colors group">
            <Minus size={16} className="group-hover:text-blue-400" />
            <span className="text-[9px] mt-0.5 text-slate-300">Minimize</span>
          </button>
          
          <button className="flex flex-col items-center hover:bg-red-600 px-3 py-1 rounded-md transition-colors group">
            <Power size={16} />
            <span className="text-[9px] mt-0.5 text-slate-300">Stop</span>
          </button>
        </div>
      </header>

      {/* 2. Modern Navigation Tabs */}
      <nav className="bg-white border-b border-slate-200 flex px-6 py-2 gap-2 shrink-0">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-6 py-1.5 rounded-full font-bold transition-all text-md max-sm:text-xs ${
              location.pathname.startsWith(item.path) 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* 3. Main Content Area */}
      <main className="flex-1 overflow-auto p-4 md:p-8 relative">
        <div className="h-full w-full mx-auto ">
          {children}
        </div>

        {/* 4. Bottom-Left Back Button (Conditional) */}
        {isNestedRoute && (
          <button 
            onClick={() => navigate(-1)}
            className="fixed bottom-10 left-8 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl hover:bg-blue-600 transition-all active:scale-95 animate-in slide-in-from-left-4 duration-300 z-50 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-wider">Go Back</span>
          </button>
        )}
      </main>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-slate-200 px-4 py-1.5 flex justify-between items-center text-[10px] text-slate-500 font-bold shrink-0">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          SYSTEM CONNECTED: HI! 1
        </div>
        <div className="opacity-50">v2.1.0-STABLE</div>
      </footer>
    </div>
  );
};