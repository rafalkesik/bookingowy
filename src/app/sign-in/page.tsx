'use client'

import Link from "next/link";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  async function handleSignIn(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email(
      { email, password },
      {
        onSuccess: (ctx) => {
          console.log("Signed in successfuly: ", ctx.data);
          router.push("/");
          router.refresh();
        },
        onError(ctx) {
          console.log("Error while signing in: ", ctx.error, ctx.error.message);
          alert(ctx.error.message);
        },
      },
    );
  }

  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <h1 className="hero-text">Zaloguj się</h1>

        <form action={handleSignIn} className="form">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block mb-3"
          />
          <label htmlFor="password">Hasło:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block mb-3"
          />
          <button
            type="submit"
            className="main-button mx-auto"
          >
            Zaloguj
          </button>
        </form>

        <div>
          <span>Nie masz konta? </span>
          <Link href="/sign-up" className="underline">Zarejestruj się.</Link>
        </div>
      </main>
    </div>
  )
}