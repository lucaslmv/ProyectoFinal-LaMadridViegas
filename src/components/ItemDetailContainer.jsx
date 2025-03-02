import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
      }
    };

    getProduct();
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;



