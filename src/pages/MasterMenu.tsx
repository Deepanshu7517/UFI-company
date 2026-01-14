// pages/MasterMenu.tsx
import { MapPin, Users, User, Layout, Package, Bell, BadgePlus, PlusCircle, BarChart } from 'lucide-preact';
import { MenuIcon } from '../components/MenuIcons.tsx';


export const MasterMenu = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full auto-rows-fr pb-6">
    <MenuIcon label="Station Master" icon={MapPin} to="/master/station" color="text-indigo-500" />
    <MenuIcon label="Group Master" icon={Users} to="/master/group" color="text-emerald-500" />
    <MenuIcon label="User Master" icon={User} to="/master/user" color="text-amber-500" />
    <MenuIcon label="Mapping Master" icon={Layout} to="/master/mapping" color="text-purple-500" />
    <MenuIcon label="Part Master" icon={Package} to="/master/part" color="text-blue-500" />
    <MenuIcon label="BOM Alert Master" icon={Bell} to="/master/bom" color="text-red-500" />
    <MenuIcon label="Report" icon={BarChart} to="/report" />
    {/* New Option */}

  </div>
);