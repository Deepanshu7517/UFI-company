// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/home";
// import AppLayout from "./pages/layout";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout>
//       <Home />
//     </AppLayout>
//   }
// ])
// const App = () => {
//   return (
//     <RouterProvider router={routes} />
//   );
// }

// export default App;
// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WindowsLayout } from './components/WindowsLayout';
import { MasterMenu } from './pages/MasterMenu';
import { TransactionMenu } from './pages/TransactionMenu';
import { FGPrinting } from './pages/FGPrinting';
import { ReportPage } from './pages/report';

export default function App() {
  return (
    <BrowserRouter>
      <WindowsLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/master" />} />
          <Route path="/master" element={<MasterMenu />} />
          <Route path="/transaction" element={<TransactionMenu />} />
          <Route path="/transaction/fg-printing" element={<FGPrinting />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </WindowsLayout>
    </BrowserRouter>
  );
}