"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Headland_One } from "next/font/google";
const headLand = Headland_One({ weight: ["400"], subsets: ["latin"] });

const Meals = () => {
  const [mealSearch, setMealSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const loadMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealSearch}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No data found");
    }
  };

  const handler = (e) => {
    setMealSearch(e.target.value);
  };
  useEffect(() => {
    loadMeals();
  }, []);

  return (
    <div className={`${headLand.className} my-5`}>
      <div>
        <input
          type="text"
          name="meal"
          onChange={handler}
          className="input input-secondary"
          placeholder="Search Meals..."
        />
        <button
          onClick={() => loadMeals()}
          className="btn bg-secondary ml-3 text-white"
        >
          Search
        </button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
              />
              <h4 className="font-bold">{meal.strMeal}</h4>
              <p>{meal.strInstructions.slice(0, 300)}</p>
            </div>
          ))}
        {error && <h3>No Data Found...</h3>}
      </div>
    </div>
  );
};

export default Meals;
