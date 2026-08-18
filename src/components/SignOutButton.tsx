'use client'

import { authClient } from "@/lib/auth/auth-client"
import { useRouter } from "next/navigation"

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut () {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.refresh(),
        onError: () => router.refresh(),
      }
    });
  }

  return(
    <button onClick={handleSignOut} className="underline cursor-pointer">
      Wyloguj
    </button>
  );
}