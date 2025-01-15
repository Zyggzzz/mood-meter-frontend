"use client";
import { SimpleBarChart, ScaleTypes } from "@carbon/charts-react";
import { useEffect, useState } from "react";
import { MoodGet } from "~/server/apiCalls";
import "@carbon/charts/styles.css";
import Image from "next/image";
import Loading from "~/app/assets/images/loading dark.svg";
import { ChartData, MoodEntry } from "~/app/types/chart";

export default function MoodChart() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartOptions, setChartOptions] = useState<any>(null);

  useEffect(() => {
    async function fetchAndProcessData() {
      const moods: MoodEntry[] = await MoodGet();

      const moodCounts = moods.reduce<Record<string, number>>(
        (acc, moodEntry) => {
          const mood = moodEntry.mood;
          acc[mood] = (acc[mood] || 0) + 1;
          return acc;
        },
        {},
      );

      const data: ChartData[] = Object.keys(moodCounts).map((mood) => ({
        group: mood,
        value: moodCounts[mood] ?? 0,
      }));

      console.log(data);

      const options = {
        bars: {
          width: 100,
          spacingFactor: 100,
        },
        axes: {
          left: {
            mapsTo: "value",
            scaleType: ScaleTypes.LINEAR,
            title: "Count",
          },
          bottom: {
            mapsTo: "group",
            scaleType: ScaleTypes.LABELS,
            title: "Mood",
          },
        },
        height: "800px",
        toolbar: {
          enabled: false,
        },
        color: {
          scale: {
            happy: "#81fbae",
            meh: "#8f88fd",
            mad: "#fd6555",
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    }

    fetchAndProcessData();
  }, []);

  return (
    <div className="h-[800px] w-full p-4">
      {chartData.length > 0 && chartOptions ? (
        <SimpleBarChart data={chartData} options={chartOptions} />
      ) : (
        <Image src={Loading.src} alt="Loading" width={50} height={50} />
      )}
    </div>
  );
}
