import Meals from "@/Components/Meals";

import { Headland_One } from "next/font/google";
const headLand = Headland_One({ weight: ["400"], subsets: ["latin"] });
export const metadata = {
  // title: {
  //   absolute: "Meals", // absolute: use korle just title eita dekhabe
  // },
  title: "Meals",
  description: "Super Powerful Next Meal Website",
};
const MealPage = () => {
  return (
    <div className={`${headLand.className} p-12`}>
      <h1 className="text-3xl font-semibold text-orange-500">
        Choose Your Meals
      </h1>
      <p>Choose meals of you choice by searching....</p>
      <Meals></Meals>
    </div>
  );
};

export default MealPage;
