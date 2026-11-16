
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) => {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-8">
        My Cart ({totalItems})
      </h1>

      {cart.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-2xl font-bold">
            Your Cart Is Empty!
          </h2>

          <Link
            to="/products"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg mt-5"
          >
            Shop Now
          </Link>

        </div>

      ) : (

        <div className="grid md:grid-cols-3 gap-6">

          {cart.map(item => (

            <div
              key={item.idMeal}
              className="bg-white shadow rounded-xl p-4"
            >

              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h2 className="text-xl font-bold mt-3">
                {item.strMeal}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.strCategory}
              </p>

              <div className="flex items-center justify-between mt-5">

                <button
                  onClick={() => decreaseQuantity(item.idMeal)}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  -
                </button>

                <span className="font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.idMeal)}
                  className="bg-gray-200 px-4 py-2 rounded"
                >
                  +
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.idMeal)}
                className="w-full bg-red-500 text-white py-3 rounded-lg mt-5"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Cart;
