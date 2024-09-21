"use server";

import { cookies } from "next/headers";

export async function unLock(password: string) {
  if (password === "fedev2024test") {
    cookies().set("password", "fedev2024test");
    return true;
  }

  return false;
}
