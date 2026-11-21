


import { Outlet } from "react-router-dom";
import AdminHeader from "../components/layouts/admin-layout/AdminHeader";
import AdminFooter from "../components/layouts/admin-layout/AdminFooter";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <main className="admin-main">
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
}
