"use client";
import Header from "../../assets/components/Header";
import Aside from "~/app/assets/components/admin/adminSidebar";
import axios from "axios";
import MoodChart from "~/app/assets/components/admin/adminGraph";
import { useState } from "react";
import AdminLogin from "~/app/assets/components/admin/adminLogin";

export default function graphs() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AdminLogin setLoading={setLoading} />;
  }
  return (
    <>
      <Header />
      <main className="flex h-fit flex-row">
        <Aside active="graphs" />
        <MoodChart />
      </main>
    </>
  );
}
