import { NextResponse } from "next/server";
// const user = true;
const co = "next-superhero";
export const middleware = (request) => {
  const cookies = request.cookies.get("token");
  // console.log(cookies);
  if (!cookies || cookies.value !== co) {
    return NextResponse.redirect(new URL("/login", request.url));
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
