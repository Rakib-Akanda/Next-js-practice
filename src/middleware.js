import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// const user = true;
const co = "next-superhero";
export const middleware = async (request) => {
  // const cookies = request.cookies.get("token");
  // // console.log(cookies);
  // if (!cookies || cookies.value !== co) {
  //   return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  // }
  const cookieStore = await cookies(request);
  const token = cookieStore.get("next-auth.session-token");
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url)); //(request.url) die amra je page theke aschi shei page redirect kore dei, ete amader private route kora lage nah helpful onk next.js automatic kore dei private route 
  }

  return NextResponse.next();
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   return NextResponse.rewrite(new URL("/about/history", request.url)); rewrite die url same thakbe but content dekhabe /about/history er, mane jekhane je page rewrite kora hobe seii page content show korbe je page theke request kora hoiche
};

export const config = {
  matcher: ["/about", "/services"],
};
