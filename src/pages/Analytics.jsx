import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

export default function Analytics() {
  const foodData = [
    { food: "Pizza", orders: 120 },
    { food: "Burger", orders: 95 },
    { food: "Biryani", orders: 150 },
    { food: "Dosa", orders: 80 },
    { food: "Sandwich", orders: 60 },
  ];

  const deliveryData = [
    { name: "Delivered", value: 220 },
    { name: "Preparing", value: 45 },
    { name: "Out for Delivery", value: 30 },
    { name: "Cancelled", value: 15 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 25000 },
    { month: "Feb", revenue: 32000 },
    { month: "Mar", revenue: 28000 },
    { month: "Apr", revenue: 40000 },
    { month: "May", revenue: 52000 },
    { month: "Jun", revenue: 65000 },
  ];

  const COLORS = [
    "#22c55e",
    "#facc15",
    "#3b82f6",
    "#ef4444",
  ];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-5 rounded-xl shadow">
          <h3>Total Orders</h3>
          <p className="text-3xl font-bold">339</p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-xl shadow">
          <h3>Total Revenue</h3>
          <p className="text-3xl font-bold">₹1,20,000</p>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-xl shadow">
          <h3>Delivered Orders</h3>
          <p className="text-3xl font-bold">220</p>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-xl shadow">
          <h3>Total Customers</h3>
          <p className="text-3xl font-bold">124</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

        {/* Food Orders */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Food Orders
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={foodData}>
              <XAxis dataKey="food" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="orders"
                fill="#3b82f6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery Status */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Delivery Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deliveryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {deliveryData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Monthly Revenue
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Foods Table */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">
          Top Selling Foods
        </h2>

        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="p-3 text-left">
                Food Item
              </th>
              <th className="p-3 text-left">
                Orders
              </th>
            </tr>
          </thead>

          <tbody>
            {foodData.map((food, index) => (
              <tr
                key={index}
                className="border-b"
              >
                <td className="p-3">
                  {food.food}
                </td>
                <td className="p-3">
                  {food.orders}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}