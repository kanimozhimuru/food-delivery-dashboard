import { useState } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
  setDarkMode(!darkMode);
};
  };

  return (
    <header className="bg-white dark:bg-slate-900 dark:text-white shadow px-5 py-4 rounded-xl flex justify-between items-center">

      <div className="relative w-64 md:w-96">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 py-2 border rounded-lg"
        />
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">
          <Bell className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        <div className="relative">
          <MessageSquare className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 rounded-full">
            5
          </span>
        </div>
        <button onClick={toggleDarkMode}>
  {darkMode ? "☀️" : "🌙"}
</button> 
       
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="rounded-full"
            />

            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow w-40">
              <div className="p-3 hover:bg-gray-100 cursor-pointer">
                Profile
              </div>

              <div className="p-3 hover:bg-gray-100 cursor-pointer">
                Settings
              </div>

              <div className="p-3 hover:bg-gray-100 cursor-pointer text-red-500">
                Logout
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}