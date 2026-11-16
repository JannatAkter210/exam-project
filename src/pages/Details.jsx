
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = ({ addToCart }) => {

  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals?.[0] || null));

  }, [id]);

  if (!meal) {
    return <h2 className="text-center p-10">Loading...</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full md:w-1/2 rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-5">
        {meal.strMeal}
      </h1>

      <p className="text-gray-500 mt-3">
        {meal.strCategory}
      </p>

      <button
        onClick={() => addToCart(meal)}
        className="bg-orange-500 text-white px-8 py-3 rounded-lg mt-5"
      >
        Add To Cart
      </button>

      <h2 className="text-2xl font-bold mt-8">
        Instructions
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        {meal.strInstructions}
      </p>

    </div>
  );
};

export default Details;
