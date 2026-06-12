import { HashRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Delivery from "./pages/Delivery";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-white">

        <Sidebar />

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

      </div>
    </HashRouter>
  );
}

export default App;