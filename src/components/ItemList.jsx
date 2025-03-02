import ProductCard from "./ProductCard";

export default function ItemList({ products }) {
  if (!products || products.length === 0) {
    return <h2>No hay productos disponibles</h2>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}