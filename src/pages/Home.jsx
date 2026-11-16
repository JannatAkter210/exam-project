
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));

  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5">

      <div className="bg-orange-100 p-12 rounded-2xl text-center mb-12">

        <h1 className="text-4xl font-bold">
          Welcome To FoodHub
        </h1>

        <p className="mt-4 text-gray-600">
          Discover Your Favorite Food
        </p>

        <Link
          to="/products"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg mt-5"
        >
          Explore Food
        </Link>

      </div>

      <h2 className="text-3xl font-bold mb-8">
        Popular Foods
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {meals.slice(0, 6).map(meal => (
          <ProductCard
            key={meal.idMeal}
            meal={meal}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
};

export default Home;
