import { useEffect, useState } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const normalized = data.map(p => {
          let mappedCategory = "Other";

          if (p.category === "electronics") mappedCategory = "Electronics";
          if (p.category.includes("clothing")) mappedCategory = "Fashion";
          if (p.category === "jewelery") mappedCategory = "Accessories";

          return {
            id: p.id,
         
            name: p.title,
            price: p.price,
            category: mappedCategory,
            image: p.image,
        
       
          };
        });

        setProducts(normalized);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return { products, loading };
}
