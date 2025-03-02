import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={handleDecrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      </div>
      <button 
        onClick={handleAdd} 
        disabled={stock === 0} 
        style={{ marginTop: "10px" }}
      >
        {stock > 0 ? "Agregar al carrito" : "Sin stock"}
      </button>
    </div>
  );
};

export default ItemCount;