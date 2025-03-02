// import React, { useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import ItemCount from "./ItemCount";
// import "./ItemDetail.css";

// const ItemDetail = ({ product }) => {
//   const { addToCart } = useContext(CartContext);
//   const [added, setAdded] = useState(false);

//   if (!product) return <h2 className="item-detail">Cargando producto...</h2>;

//   const handleAdd = (quantity) => {
//     addToCart(product, quantity);
//     setAdded(true);
//   };

//   return (
//     <div className="item-detail">
//       <h2>{product.title}</h2>
//       <img src={product.image} alt={product.title} />
//       <p>Precio: ${product.price}</p>
//       <p>{product.description}</p>
//       {product.stock === 0 ? (
//         <p className="stock-alert">Producto sin stock</p>
//       ) : !added ? (
//         <ItemCount stock={product.stock} onAdd={handleAdd} />
//       ) : (
//         <p>Producto agregado al carrito</p>
//       )}
//     </div>
//   );
// };

// export default ItemDetail;

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product) return <h2 className="item-detail">Cargando producto...</h2>;

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      {product.stock === 0 ? (
        <p className="stock-alert">Producto sin stock</p>
      ) : !added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;