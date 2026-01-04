import { useState } from "react";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { useProducts } from "./hooks/useProducts";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const { products, loading } = useFetchProducts();
  const filtered = useProducts(products, search, category, sort);
  

  return (
    <>
      <h1>Mini E-Commerce</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

<div className="main">
        <ProductGrid products={filtered} />
        <Cart />
      </div>
    </>
  );
}

export default App;
