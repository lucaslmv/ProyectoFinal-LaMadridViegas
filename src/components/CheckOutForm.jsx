import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Por favor, completa todos los campos");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyer.email)) {
      alert("Por favor, ingresa un email válido");
      return;
    }
    if (buyer.phone.length < 6) {
      alert("El teléfono debe tener al menos 6 dígitos");
      return;
    }

    const itemsSummary = cart.map((prod) => `${prod.title} (${prod.quantity})`).join(", ");
    const isConfirmed = window.confirm(`¿Estás seguro que quieres confirmar la compra de: ${itemsSummary}?`);
    if (!isConfirmed) return;

    const order = {
      buyer,
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.title,
        quantity: prod.quantity,
        price: prod.price,
      })),
      total: totalPrice,
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      setShowSuccess(true);
      setTimeout(() => {
        clearCart();
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error al guardar la orden:", error);
      alert("Hubo un error al procesar tu compra. Intenta de nuevo.");
    }
  };

  if (orderId && !showSuccess) {
    return (
      <div className="cart-container">
        <h2>Compra realizada con éxito</h2>
        <p>Tu ID de orden es: {orderId}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Finalizar Compra</h2>
      {showSuccess ? (
        <div className="success-message">
          <h2>¡Compra exitosa!</h2>
          <p>Tu compra ha sido procesada correctamente.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
}