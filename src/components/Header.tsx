import { getUser, isLoggedIn } from "@/lib/auth/session";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { NavLinks } from "./NavLinks";


export default async function Header() {
  const loggedIn = await isLoggedIn();
  const user = await getUser();
  const isAdmin = user?.role === "admin";

  return (
    <div className="bg-zinc-50 py-7 px-35 flex justify-between items-baseline ">
      <Link href="/" className="logo-class">
        Bookingowy.pl
      </Link>

      <NavLinks isAdmin={isAdmin}/>
      
      {
        loggedIn ?
        <div className="flex gap-5">
          <div>
            Zalogowano jako { user?.name }.
          </div>
          <SignOutButton />
        </div> :        
        <Link href="/sign-in" className="underline">
          Zaloguj
        </Link>
      }
    </div>
  )
}