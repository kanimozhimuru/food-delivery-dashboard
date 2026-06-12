import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import OrdersTable from "../components/OrdersTable";
import CreateUserModal from "../components/CreateUserModal";

export default function Dashboard() {
  return (
    <div className="p-6 bg-slate-100 dark:bg-slate-900 min-h-screen">
    
      <Header />

      <div className="mt-6">
        <StatsCards />
      </div>

      <div className="mt-6 flex justify-end">
        <CreateUserModal />
      </div>

      <div className="mt-6">
        <OrdersTable />
      </div>

    </div>
  );
}