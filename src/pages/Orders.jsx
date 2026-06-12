import { useState } from "react";

export default function Orders() {
  const orders = [
    {
      id: "#1001",
      customer: "John",
      food: "Burger Combo",
      time: "10:30 AM",
      location: "Chennai",
      status: "Delivered",
      amount: "₹250",
    },
    {
      id: "#1002",
      customer: "Sarah",
      food: "Pizza",
      time: "11:15 AM",
      location: "Coimbatore",
      status: "Preparing",
      amount: "₹450",
    },
    {
      id: "#1003",
      customer: "David",
      food: "Biryani",
      time: "12:00 PM",
      location: "Madurai",
      status: "Out for Delivery",
      amount: "₹320",
    },
    {
      id: "#1004",
      customer: "Priya",
      food: "Dosa",
      time: "01:20 PM",
      location: "Salem",
      status: "Delivered",
      amount: "₹180",
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.food
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Orders Management
      </h1>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 mb-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">

          <input
            type="text"
            placeholder="Search customer or food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg p-3 w-full md:w-80 text-black"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border rounded-lg p-3 text-black"
          >
            <option value="All">All Orders</option>
            <option value="Delivered">
              Delivered
            </option>
            <option value="Preparing">
              Preparing
            </option>
            <option value="Out for Delivery">
              Out for Delivery
            </option>
          </select>
        </div>
      </div>

      {/* Order Count */}
      <div className="mb-4">
        <p className="font-semibold">
          Total Orders: {filteredOrders.length}
        </p>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5 overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b bg-gray-100 dark:bg-slate-700">
              <th className="text-left p-3">
                Order ID
              </th>
              <th className="text-left p-3">
                Customer
              </th>
              <th className="text-left p-3">
                Food
              </th>
              <th className="text-left p-3">
                Time
              </th>
              <th className="text-left p-3">
                Location
              </th>
              <th className="text-left p-3">
                Status
              </th>
              <th className="text-left p-3">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-slate-700"
              >
                <td className="p-3">
                  {order.id}
                </td>

                <td className="p-3">
                  {order.customer}
                </td>

                <td className="p-3">
                  {order.food}
                </td>

                <td className="p-3">
                  {order.time}
                </td>

                <td className="p-3">
                  {order.location}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      order.status ===
                      "Delivered"
                        ? "bg-green-500"
                        : order.status ===
                          "Preparing"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-3 font-semibold">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No orders found.
          </p>
        )}
      </div>
    </div>
  );
}