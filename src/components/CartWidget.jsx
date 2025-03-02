import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
      🛒 {totalQuantity > 0 ? totalQuantity : ""}
    </Link>
  );
};

export default CartWidget;

