import ProductView from "@/views/product";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../api/swr/swr";

const ProductPage = () => {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   const fecthProduct = async () => {
  //     const res = await fetch("/api/product");
  //     const data = await res.json();
  //     setProduct(data.data);
  //   };
  //   fecthProduct();
  // }, []);
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  return (
    <div>
      <ProductView product={isLoading ? [] : data?.data} />
    </div>
  );
};

export default ProductPage;
