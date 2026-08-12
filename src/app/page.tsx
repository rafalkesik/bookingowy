import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between pt-15 pb-60 px-16 bg-white sm:items-start">
        <span className="text-3xl font-bold text-amber-600">
          Bookingowy.pl
        </span>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black">
            Zdobądź kontrolę nad wyposażeniem Twojego lokalu.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Chcesz usprawnić zarządzanie sprzątaniem? Dowozem prania? Dokupem brakującej chemii?
          </p>
          <p className="font-bold max-w-lg text-lg leading-8 text-zinc-600">
            Zobacz jakie to proste na przykładowym apartamencie:
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-[158px]"
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
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[160px]"
            href="/"
          >
            Poczytaj więcej
          </a>
        </div>
      </main>
    </div>
  );
}
