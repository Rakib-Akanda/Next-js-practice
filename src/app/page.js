import Image from "next/image";
import Heading from "../Components/Heading";

export default function Home() {
  // setTimeout(() => {
  //   console.log("hello");
  // }, 5000);
  // console.log(name);
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <p className="text-5xl">hello next hero </p>
      <button className="btn btn-xl">Xlarge</button>
      <Heading></Heading>
      <button className="text-5xl">Submit </button>
    </div>
  );
}
