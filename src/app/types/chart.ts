export interface MoodEntry {
  mood: "happy" | "meh" | "mad";
  time: string;
}

export interface ChartData {
  group: string;
  value: number;
}
