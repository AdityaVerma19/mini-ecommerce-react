import { useMemo } from "react";

export function useProducts(products, search, category, sort) {
  return useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter(p => p.category === category);
    }

    if (sort === "low") data.sort((a,b)=>a.price-b.price);
    if (sort === "high") data.sort((a,b)=>b.price-a.price);

    return data;
  }, [products, search, category, sort]);
}
