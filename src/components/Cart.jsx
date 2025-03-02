import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total de unidades: {totalQuantity}</h3>
      <h3>Total a pagar: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <CheckOutForm />
    </div>
  );
};

export default Cart;


