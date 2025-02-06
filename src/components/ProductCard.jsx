import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article style={{ border: '1px solid grey', padding: 10 }}>
      <h3>
        {product.title} - {product.id}
      </h3>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <button>
        <Link to={`/product/${product.id}`}>Mas detalles</Link>
      </button>
    </article>
  );
}