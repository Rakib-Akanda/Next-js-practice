import Link from "next/link";

const History = () => {
  return (
    <div>
      This is history page
      <Link href={"/about/history/vision"} className="btn">
        Vision
      </Link>
    </div>
  );
};

export default History;
