
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ addToCart }) => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
      .then(data => setMeals(data.meals || []));

  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-8">
        All Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {meals.map(meal => (
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

export default Products;
