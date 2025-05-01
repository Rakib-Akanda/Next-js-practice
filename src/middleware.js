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

  // const token = request.cookies.get("__Secure-next-auth.session-token");
  const token =
    request.cookies.get("__Secure-next-auth.session-token") ||
    request.cookies.get("next-auth.session-token");
  // karon deploy er chagne hoie jai
  /* হ্যাঁ, ✅ NextAuth.js (Next.js এর জন্য authentication library) নিজেই cookies-এর নাম production environment-এ automatic পরিবর্তন করে:

🔄 Cookie Name পরিবর্তনের ব্যপারটি:
Environment	Cookie Name
Development	next-auth.session-token
Production (HTTPS)	__Secure-next-auth.session-token
🔒 কেন এমন করে?
এইটা security জন্য করা হয়:
__Secure- prefix শুধু তখনি কাজ করে যখন:
Cookie Secure flag সহ সেট করা হয় (i.e., HTTPS connection only)
এটি browser-এ trustable হিসেবে ধরা হয়
এটা ensures করে যে:
Cookie গুলো HTTPS ছাড়া পাঠানো যাবে না
এবং cross-site scripting (XSS) attack থেকেও নিরাপদ থাকে কিছুটা
    */
  // console.log("cookies", token);
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
