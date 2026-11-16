
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow p-5">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-orange-500">
          FoodHub
        </Link>

        <div className="flex gap-5 font-semibold items-center">

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/about">About</Link>

          <Link to="/cart" className="relative">
            Cart

            <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
