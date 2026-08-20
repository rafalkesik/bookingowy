import { cache } from "react";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = cache(async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (error) {
    return null;
  }
});

export async function isLoggedIn(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}

export async function getUser() {
  const session = await getSession();
  return (session?.user ?? null);
}

export async function verifyAdmin() {
  const user = await getUser();
  return (user?.role === "admin");
}