"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
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
  ];
  const handleLogin = () => {
    router.push("/about");
    console.log();
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
        <button onClick={() => handleLogin()} className="btn">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
