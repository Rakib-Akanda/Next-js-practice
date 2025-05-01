"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  //   console.log(pathName);
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Signup",
      path: "/api/auth/signup",
    },
  ];
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  if (pathName.includes("dashboard")) {
    return (
      <div>
        <div className="bg-green-500 p-6 ">Dashboard Layout</div>
        {/* {children} */}
        <footer>Dashboard Footer</footer>
      </div>
    );
  }
  return (
    <div>
      <nav className="bg-orange-500 p-4 mb-4 flex justify-between items-center">
        <Link href={"/"}>
          <h6 className="text-2xl font-bold">
            Next <span className="text-white  ">Hero</span>
          </h6>
        </Link>
        <ul className="flex justify-between items-center space-x-4 gap-2 text-white text-2xl">
          {links?.map((link) => (
            <Link
              key={link?.path}
              href={link?.path}
              className={`hover:text-white ${
                pathName !== link.path ? "text-white" : "text-blue-500"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        {session.status === "authenticated" ? (
          <button onClick={() => signOut()} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={() => handleLogin()} className="btn">
            Login
          </button>
        )}
        <div className="flex items-center gap-2">
          <div>
            {session?.data?.user?.image ? (
              <Image
                src={session.data.user.image}
                height={40}
                width={40}
                className="rounded-full"
                alt={session.data.user.name || "User"}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Optional fallback icon or initials */}
                <span className="text-sm text-white">N/A</span>
              </div>
            )}
          </div>
          <div>
            <h6>Name : {session?.data?.user?.name}</h6>
            <h6>Type : {session?.data?.user?.type}</h6>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
