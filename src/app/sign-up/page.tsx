import Link from "next/link";
import { Metadata } from "next";
import SignUpForm from "@/components/SignUpForm";

export const metadata: Metadata = {
  title: "Bookingowy | Zarejestruj",
  description: "Zarejestruj się w Bookingowy.pl - aplikacji do zarządzania wyposażeniem, sprzątaniem i praniem w lokalach na wynajem krótkoterminowy."
}

export default function SignUpPage () {
  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600 mb-10 mx-5">
          ← Powrót
        </Link>

        <h1 className="hero-text mb-10 mx-10">Zarejestruj konto</h1>

        <SignUpForm />

        <div className="mt-5 mx-10 text-center md:text-start">
          <span>Masz już konto? </span>
          <Link href="/sign-in" className="underline">Zaloguj się.</Link>
        </div>
      </main>
    </div>
  )
}