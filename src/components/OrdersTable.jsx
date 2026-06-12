export default function OrdersTable() {
  const orders = [
    {
      id: "#1001",
      customer: "John",
      amount: "₹265",
      status: "Delivered",
    },
    {
      id: "#1002",
      customer: "Sarah",
      amount: "₹188",
      status: "Preparing",
    },
    {
      id: "#1003",
      customer: "David",
      amount: "₹940",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">
      <h2 className="font-bold text-lg mb-4">
        Recent Orders
      </h2>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-slate-700">
            <th className="text-left py-3">Order ID</th>
            <th className="text-left py-3">Customer</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-3">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}