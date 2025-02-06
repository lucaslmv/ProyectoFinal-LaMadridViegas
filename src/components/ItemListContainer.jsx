import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bagProducts from '../bagsProducts';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setProducts(bagProducts.filter((product) => product.category === categoryId));
    } else {
      setProducts(bagProducts);
    }
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <ItemList products={products} />
    </div>
  );
}


