"use server";
import { cookies } from "next/headers";

export async function CookiesSet(cookie: string) {
  const cookieStore = await cookies();
  cookieStore.set(cookie, "true");
}

export async function CookiesGet(cookie: string) {
  const cookieStore = await cookies();
  return cookieStore.get(cookie);
}
