import type { ReactElement } from "preact/compat";
import { useState, useEffect } from "preact/hooks"; // Import hooks
import Navbar from "../components/navbar";
import { formatDate, formatTime } from "../utilities/function";

const AppLayout = ({ children }: { children: ReactElement }) => {
  // 1. Initialize state with the current date
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // 2. Set up a timer to update state every second
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // 3. Clean up the timer when the component is destroyed
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      
      <main className="flex-1">{children}</main>
      
      <footer className="flex justify-between items-center p-4 bg-dashboard-bg text-text-secondary text-xs border-t border-gray-800">
        <p>
          {("@developed by iotelligence pvt limited | +91 9158151406 | 2026").toUpperCase()}
        </p>
        <div className="flex gap-4">
          {/* 4. Use the 'now' state variable instead of 'new Date()' */}
          <p>{formatDate(now)}</p>
          <p>{formatTime(now)}</p>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;