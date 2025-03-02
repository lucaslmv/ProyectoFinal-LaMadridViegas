// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, doc, updateDoc } from "firebase/firestore";
// import bagProducts from "./bagsProducts.js";
// import { db } from "./firebase/config.js";

// const updateStock = async () => {
//   try {
//     const productsRef = collection(db, "products");

//     for (let product of bagProducts) {
//       const productDoc = doc(productsRef, String(product.id));
//       await updateDoc(productDoc, { stock: product.stock });
//       console.log(`Stock de ${product.title} (ID: ${product.id}) actualizado a ${product.stock}.`);
//     }

//     console.log("¡Stock de todos los productos actualizado con éxito!");
//   } catch (error) {
//     console.error("Error actualizando stock:", error);
//   }
// };

// updateStock();

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import bagProducts from "./bagsProducts.js";
import { db } from "./firebase/config.js";

const uploadProducts = async () => {
  try {
    const productsRef = collection(db, "products");
    for (let product of bagProducts) {
      const productDoc = doc(productsRef, String(product.id));
      await setDoc(productDoc, product);
      console.log(`Producto ${product.title} (ID: ${product.id}) subido correctamente.`);
    }
    console.log("¡Todos los productos han sido subidos con éxito!");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
};

uploadProducts();