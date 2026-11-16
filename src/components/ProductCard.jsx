
import { Link } from "react-router-dom";

const ProductCard = ({ meal, addToCart }) => {

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {meal.strMeal}
        </h2>

        <p className="text-gray-500 mt-2">
          {meal.strCategory}
        </p>

        <button
          onClick={() => addToCart(meal)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-4"
        >
          Add To Cart
        </button>

        <Link
          to={`/details/${meal.idMeal}`}
          className="block text-center bg-gray-800 text-white py-3 rounded-lg mt-3"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;
