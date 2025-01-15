import AdminLogsTable from "./adminLogsTable";
import EnqueteResponses from "./enqueteResponses";
import MoodResponses from "./moodResponses";

export default function AdminLogs() {
  return (
    <main className="inline w-full p-8">
      <AdminLogsTable />
      <div className="mt-8 flex flex-row gap-8">
        <MoodResponses />
        <EnqueteResponses />
      </div>
    </main>
  );
}
