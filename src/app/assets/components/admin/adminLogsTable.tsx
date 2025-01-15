import { getLogsData } from "~/server/apiCalls";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Loading from "~/app/assets/images/loading dark.svg";

export default function AdminLogsTable() {
  const [logData, setLogData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getLogsData();
        console.log(data);
        setLogData(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
        setLogData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Scroll to the bottom when logData updates
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [logData]);

  return (
    <table className="w-full border-separate rounded-lg border-4 border-solid border-redAccent p-2">
      <thead>
        <tr>
          <th className="text-left text-xl font-bold text-redAccent">
            Server Logs
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3}>
            <div
              ref={scrollContainerRef}
              className="h-[550px] min-h-[550px] overflow-y-auto"
            >
              {loading ? (
                <div className="flex h-full items-center justify-center text-gray-500">
                  <Image
                    src={Loading.src}
                    alt="loading gif"
                    width={50}
                    height={50}
                  />
                </div>
              ) : logData.length === 0 ? (
                <div className="flex h-full items-center justify-center text-gray-500">
                  No logs found.
                </div>
              ) : (
                <table className="w-full">
                  <tbody>
                    {logData.map((log) => (
                      <tr key={log.i} className="h-5 border-b">
                        <td className="w-[30%]">{log.message}</td>
                        <td className="w-[20%]">{log.type}</td>
                        <td>{log.status ? log.status : null}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
