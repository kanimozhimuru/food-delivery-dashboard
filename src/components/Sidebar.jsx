import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Truck,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: Users,
    },
    {
      name: "Delivery",
      path: "/delivery",
      icon: Truck,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white p-4">
        <h1 className="text-xl font-bold">
          FoodDash
        </h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static
          top-0 left-0
          h-screen
          w-64
          bg-white
          dark:bg-slate-800
          dark:text-white
          shadow-lg
          z-50
          transform
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <h1 className="text-2xl font-bold p-5 border-b">
          FoodDash
        </h1>

        <nav className="p-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.name}
              to={menu.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg mb-2 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700"
                }`
              }
            >
              <menu.icon size={20} />
              {menu.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}