"use server";
import axios from "axios";
import { enqueteResultType } from "../app/types/apiCalls";

const token = process.env.API_KEY;

export async function MoodCall(result: string) {
  const response = await axios.post(
    "https://api.mood-meter.nl/api/mood",
    { mood: result },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  console.log(response.data.message);
}

export async function MoodGet() {
  const response = await axios.get("https://api.mood-meter.nl/api/mood", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.data.message);
}

export async function EnqueteCall(enqueteResult: enqueteResultType) {
  const response = await axios.post(
    "https://api.mood-meter.nl/api/enquete",
    enqueteResult,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  console.log(response.data.message);
}
