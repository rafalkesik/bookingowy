import Link from "next/link";

export default function SignUpPage () {
  
  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <h1 className="hero-text">Zarejestruj konto</h1>
        <div>
          <span>Masz już konto? </span>
          <Link href="/sign-in" className="underline">Zaloguj się.</Link>
        </div>
      </main>
    </div>
  )
}