export default function StatsCards() {
  const stats = [
    {
      title: "Total Orders",
      value: "339",
    },
    {
      title: "Revenue",
      value: "₹12,500",
    },
    {
      title: "Customers",
      value: "1,240",
    },
    {
      title: "Delivery Partners",
      value: "52",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">
  <h3 className="text-gray-500 dark:text-gray-300">

    <div className="grid md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white p-5 rounded-xl shadow"
        >
          <h3 className="text-gray-500">
            {stat.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
     </h3>
 </div>
  );
}