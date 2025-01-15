"use client";
import Header from "~/app/assets/components/Header";
import Aside from "~/app/assets/components/admin/adminSidebar";
import AdminLogin from "~/app/assets/components/admin/adminLogin";
import { useState } from "react";
import AdminLogs from "~/app/assets/components/admin/adminLogs";

export default function adminLanding() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AdminLogin setLoading={setLoading} />;
  }

  return (
    <>
      <Header />
      <main className="flex h-fit flex-row">
        <Aside active="dashboard" />
        <AdminLogs />
      </main>
    </>
  );
}
