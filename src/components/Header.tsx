import { getUser, isLoggedIn } from "@/lib/auth/session";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { NavLinks } from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";


export default async function Header() {
  const loggedIn = await isLoggedIn();
  const user = await getUser();
  const isAdmin = user?.role === "admin";

  return (
    <div className="bg-zinc-50 py-10">
      <div className="navbar flex justify-between max-w-340 px-10 items-baseline mx-auto">
        <Link href="/" className="logo-class">
          Bookingowy.pl
        </Link>

        <NavLinks isAdmin={isAdmin}/>
        
        {
          loggedIn ?
          <div className="flex gap-5">
            <div className="loggedUserClass">
              Zalogowano jako { user?.name }.
            </div>
            <SignOutButton />
          </div> :        
          <Link href="/sign-in" className="login-button">
            Zaloguj
          </Link>
        }

        <HamburgerMenu />
      </div>
    </div>
  )
}