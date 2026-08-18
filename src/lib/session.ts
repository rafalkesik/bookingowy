import { cache } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { User } from "better-auth";

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

export async function getUser(): Promise<User | null> {
  const session = await getSession();
  
  return (
    session ? session?.user : null
  )
}