import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <h2 className="text-3xl font-bold">
        Food Delivery Dashboard
      </h2>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg pl-10 pr-4 py-2 bg-white"
        />
      </div>
    </div>
  );
}