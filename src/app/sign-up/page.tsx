'use client'

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage () {
  const router = useRouter();

  async function handleSignUp(formData: FormData) {
    const email    = formData.get("email")    as string;
    const password = formData.get("password") as string;
    const name     = formData.get("name")     as string;

    const { data } = await authClient.signUp.email(
      { email, password, name },
      { 
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
        onError: (ctx) => {
          console.log("Error while signing-up: ", ctx.error, ctx.error.message);
          alert(ctx.error.message);
        },
      }
    )
  }

  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <h1 className="hero-text">Zarejestruj konto</h1>

        <form action={handleSignUp} className="form">
          <label htmlFor="name">Nazwa użytkownika</label>
          <input
            id="name"
            name="name"
            type="text"
            className="block mb-7"
            required
          />
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
            Zarejestruj
          </button>
        </form>

        <div>
          <span>Masz już konto? </span>
          <Link href="/sign-in" className="underline">Zaloguj się.</Link>
        </div>
      </main>
    </div>
  )
}