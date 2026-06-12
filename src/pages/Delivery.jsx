import { useState } from "react";

export default function Delivery() {
  const deliveries = [
    {
      id: "D001",
      customer: "John Smith",
      rider: "Arun Kumar",
      food: "Burger Combo",
      address: "Anna Nagar, Chennai",
      time: "10:45 AM",
      amount: "₹250",
      status: "Delivered",
    },
    {
      id: "D002",
      customer: "Sarah Johnson",
      rider: "Rajesh",
      food: "Pizza",
      address: "RS Puram, Coimbatore",
      time: "11:20 AM",
      amount: "₹450",
      status: "Delivered",
    },
    {
      id: "D003",
      customer: "David Wilson",
      rider: "Karthik",
      food: "Chicken Biryani",
      address: "KK Nagar, Madurai",
      time: "12:15 PM",
      amount: "₹320",
      status: "Delivered",
    },
    {
      id: "D004",
      customer: "Priya Kumar",
      rider: "Vignesh",
      food: "Masala Dosa",
      address: "Fairlands, Salem",
      time: "01:30 PM",
      amount: "₹180",
      status: "Delivered",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredDeliveries = deliveries.filter(
    (delivery) =>
      delivery.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      delivery.food
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      delivery.rider
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Delivered Orders
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-5 rounded-xl">
          <h3>Total Delivered</h3>
          <p className="text-3xl font-bold">
            {deliveries.length}
          </p>
        </div>

        <div className="bg-blue-500 text-white p-5 rounded-xl">
          <h3>Active Riders</h3>
          <p className="text-3xl font-bold">32</p>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-xl">
          <h3>Today's Deliveries</h3>
          <p className="text-3xl font-bold">58</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 mb-4">
        <input
          type="text"
          placeholder="Search customer, food, or rider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-3 w-full md:w-96 text-black"
        />
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5 overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700 border-b">
              <th className="p-3 text-left">Delivery ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Rider</th>
              <th className="p-3 text-left">Food Item</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredDeliveries.map((delivery) => (
              <tr
                key={delivery.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-slate-700"
              >
                <td className="p-3">{delivery.id}</td>
                <td className="p-3">{delivery.customer}</td>
                <td className="p-3">{delivery.rider}</td>
                <td className="p-3">{delivery.food}</td>
                <td className="p-3">{delivery.address}</td>
                <td className="p-3">{delivery.time}</td>
                <td className="p-3 font-semibold">
                  {delivery.amount}
                </td>
                <td className="p-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {delivery.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredDeliveries.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No deliveries found.
          </p>
        )}
      </div>
    </div>
  );
}