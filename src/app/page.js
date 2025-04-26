import Image from "next/image";
import Heading from "../Components/Heading";

export default function Home() {
  // setTimeout(() => {
  //   console.log("hello");
  // }, 5000);
  // console.log(name);
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      hello next hero 
      <Heading></Heading>
      <button className="text-5xl">Submit </button>
    </div>
  );
}
