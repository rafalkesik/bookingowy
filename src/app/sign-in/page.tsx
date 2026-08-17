import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>
        <h1 className="hero-text">
          Zaloguj się
        </h1>
        <div>
          <span>Nie masz konta? </span>
          <Link href="/sign-up" className="underline">Zarejestruj się.</Link>
        </div>
        </main>
    </div>
  )
}