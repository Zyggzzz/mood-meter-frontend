import Header from "~/app/assets/components/Header";
import Aside from "~/app/assets/components/admin/adminSidebar";

export default function adminLanding() {
  return (
    <>
      <Header />
      <Aside active="dashboard" />
    </>
  );
}
