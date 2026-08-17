import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-zinc-50 py-7 px-35 flex justify-between items-baseline ">
      <Link href="/" className="logo-class">
        Bookingowy.pl
      </Link>
      <Link href="/" className="text-lg underline">
        Zaloguj
      </Link>
    </div>
  )
}