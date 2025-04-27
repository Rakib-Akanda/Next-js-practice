import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    // next: { revalidate: 5 }, // cache data
    cache: "no-store",
  });
  const data = await res.json();
  // console.log(data);
  return data.currentTime;
};

const AboutContent = async () => {
  const session = await getServerSession(authOptions);
  console.log({session});
  const currentTime = await getTime();
  return (
    <div>
      <div>
        <h2 className="text-3xl text-red-400 mt-12">Time:{currentTime} </h2>
      </div>
      <Link href={"/about/history"} className="btn">
        History
      </Link>
      <Link href={"/about/history"} className="btn">
        Mission
      </Link>
      <Link href={"/about/history/vision"} className="btn">
        Vision
      </Link>
    </div>
  );
};

export default AboutContent;
