import Header from "../../assets/components/Header";
import Aside from "~/app/assets/components/admin/adminSidebar";
import axios from "axios";

export default function graphs() {
  return (
    <>
      <Header />
      <main className="flex h-fit flex-row">
        <Aside active="graphs" />
      </main>
    </>
  );
}
