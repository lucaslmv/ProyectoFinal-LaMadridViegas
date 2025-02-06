import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import bagProducts from '../bagsProducts';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = bagProducts.find((prod) => prod.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <h2>Producto no encontrado</h2>;

  console.log("Producto en detalle:", product);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={`/${product.image}`} alt={product.title} />
      <p>Descripción: {product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

