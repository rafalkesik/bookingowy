import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.redirect("/sign-in")
  }

  return NextResponse.next();
}

export const config = {
  // matcher: [""], // Specify the routes the middleware applies to
}