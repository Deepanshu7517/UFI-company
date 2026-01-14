// pages/TransactionMenu.tsx
import { Printer, RotateCcw, XCircle, PackagePlus, PlusCircle } from 'lucide-preact';
import { MenuIcon } from '../components/MenuIcons.tsx';
import { FGReprintModal } from '../components/FG-re-printing.tsx';
import { useState } from 'preact/hooks';

export const TransactionMenu = () => {
  const [IsReprintModalOpen, setIsReprintModalOpen] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full auto-rows-fr">
      <MenuIcon label="FG Printing" icon={Printer} to="/transaction/fg-printing" />
      <div onClick={() => setIsReprintModalOpen(true)} className="cursor-pointer h-full">
        <MenuIcon
          label="FG Reprinting"
          icon={RotateCcw}
          to="" // Keep empty or pass a prop to MenuIcon to disable Link
        />
      </div>
      <MenuIcon label="Rejection" icon={XCircle} to="/transaction/rejection" color="text-red-600" />
      <MenuIcon label="Release Qty." icon={PackagePlus} to="/transaction/release" color="text-red-800" />
      <MenuIcon label="Manual Add Child Stock" icon={PlusCircle} to="/transaction/add-stock" color="text-green-700" />
      <FGReprintModal
        isOpen={IsReprintModalOpen}
        onClose={() => setIsReprintModalOpen(false)}
      />
    </div>
  )
}