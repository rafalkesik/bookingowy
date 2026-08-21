import Link from "next/link";
import { Metadata } from "next";
import SignInForm from "@/components/SignInForm";

export const metadata: Metadata = {
  title: "Bookingowy | Zaloguj",
  description: "Zaloguj się do Bookingowy.pl - aplikacji do zarządzania wyposażeniem, sprzątaniem i praniem w lokalach na wynajem krótkoterminowy."
}

export default function SignInPage() {
  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <h1 className="hero-text">Zaloguj się</h1>

        <SignInForm />

        <div>
          <span>Nie masz konta? </span>
          <Link href="/sign-up" className="underline">Zarejestruj się.</Link>
        </div>
      </main>
    </div>
  )
}