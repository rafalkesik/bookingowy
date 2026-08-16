// To be fixed

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-background">
      <main className="main-class">
        <span className="logo-class">
          Bookingowy.pl
        </span>
        <div className="landing-page-container">
          <h1 className="hero-text">
            Zdobądź kontrolę nad wyposażeniem Twojego lokalu.
          </h1>
          <p className="paragraph">
            Chcesz usprawnić zarządzanie sprzątaniem? Dowozem prania? Dokupem brakującej chemii?
          </p>
          <p className="paragraph font-bold">
            Zobacz jakie to proste na przykładowym apartamencie:
          </p>
        </div>
        <div className="action-buttons">
          <Link
            className="main-button"
            href="/calendar"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
              loading="eager"
            />
            Przetestuj
          </Link>
          <Link
            className="secondary-button"
            href="/roadmap"
          >
            Poczytaj więcej
          </Link>
        </div>
      </main>
    </div>
  );
}
