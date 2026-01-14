import { Link } from 'react-router-dom';


interface IconProps {
  label: string;
  icon: any;
  to: string;
  color?: string;
  onclick?: () => void;
}

export const MenuIcon = ({ label, icon: Icon, to,onclick, color = "text-blue-500" }: IconProps) => {
  console.log(onclick);
  return(

    <Link 
    to={to} 
    className="group relative flex flex-col items-center justify-center w-full h-full min-h-[160px] p-4
    bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl
               shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
               hover:shadow-[0_20px_40px_0_rgba(31,38,135,0.15)] 
               hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
               >
    {/* Animated background accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className={`p-4 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors duration-300 ${color} shadow-sm group-hover:shadow-md shrink-0`}>
      <Icon size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
    </div>
    
    {/* Label: Added 'text-balance' and 'leading-tight' for better multi-line handling */}
    <span className="mt-4 text-xs md:text-sm font-semibold text-slate-700 uppercase tracking-wide group-hover:text-blue-600 transition-colors text-center leading-tight w-full break-words px-2">
      {label}
    </span>
    
    {/* Bottom Indicator */}
    <div className="absolute bottom-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
  </Link>
)
}