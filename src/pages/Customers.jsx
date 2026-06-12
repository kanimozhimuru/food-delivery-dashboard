import { useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      phone: "9876543210",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@gmail.com",
      phone: "9876543211",
      city: "Coimbatore",
    },
    {
      id: 3,
      name: "David Wilson",
      email: "david@gmail.com",
      phone: "9876543212",
      city: "Madurai",
    },
    {
      id: 4,
      name: "Priya Kumar",
      email: "priya@gmail.com",
      phone: "9876543213",
      city: "Salem",
    },
  ]);

  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const deleteCustomer = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (confirmDelete) {
      setCustomers(
        customers.filter(
          (customer) => customer.id !== id
        )
      );

      setMessage("✅ Customer deleted successfully!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.city
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Customers Management
      </h1>

      {message && (
        <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg">
          {message}
        </div>
      )}

      {/* Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-5 rounded-xl">
          <h3>Total Customers</h3>
          <p className="text-3xl font-bold">
            {customers.length}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 mb-4">
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg p-3 w-full md:w-96 text-black"
        />
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5 overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700 border-b">
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Phone</th>
              <th className="text-left p-3">City</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-slate-700"
              >
                <td className="p-3">{customer.id}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.city}</td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      deleteCustomer(customer.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredCustomers.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No customers found.
          </p>
        )}
      </div>
    </div>
  );
}