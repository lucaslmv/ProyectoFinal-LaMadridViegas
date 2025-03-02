// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase/config";
// import ProductCard from "./ProductCard";

// const ItemListContainer = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         if (category) {
//           setProducts(productsData.filter(product => product.category === category));
//         } else {
//           setProducts(productsData);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//         setError("Error al cargar los productos");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>{error}</p>;
//   if (!products.length) return <h2>No hay productos disponibles</h2>;

//   return (
//     <div>
//       <h2>Productos</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemListContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ProductCard from "./ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (category) {
          setProducts(productsData.filter(product => product.category === category));
        } else {
          setProducts(productsData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("Error al cargar los productos");
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <p className="item-list-container">Cargando productos...</p>;
  if (error) return <p className="item-list-container">{error}</p>;
  if (!products.length) return <h2 className="item-list-container">No hay productos disponibles en esta categoría</h2>;

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
