import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductPageShimmer from "./ProductPageShimmer";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductsFeed = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [error, setError] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
        setError(true)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(error) return <h1 className=" text-center text-red-600 text-3xl p-3">Oops!! Product Not Found</h1>
  if(products.length === 0) return <ProductPageShimmer/>

  return (
    // flow-dense means densely populate full area
    <div className=" grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto">
      {products.slice(0, 4).map((product) => {
        return <ProductCard key={product.id} productInfo={product} />;
      })}
      <img
        className=" md:col-span-full px-5"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className=" md:col-span-2">
        {products.slice(4, 5).map((product) => {
          return <ProductCard key={product.id} productInfo={product} />;
        })}
      </div>
      {products.slice(5, products.length).map((product) => {
        return <ProductCard key={product.id} productInfo={product} />;
      })}
    </div>
  );
};

export default ProductsFeed;
