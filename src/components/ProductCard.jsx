// import { Link } from "react-router-dom";
// import "./ItemListContainer.css";

// export default function ProductCard({ product }) {
//   return (
//     <article className="product-card">
//       <h3>{product.title}</h3>
//       <img src={product.image} alt={product.title} />
//       <p>${product.price}</p>
//       <Link to={`/product/${product.id}`}>
//         <button>Más detalles</button>
//       </Link>
//     </article>
//   );
// }

import { Link } from "react-router-dom";
import "./ItemListContainer.css";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>Más detalles</button>
      </Link>
    </article>
  );
}