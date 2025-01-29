import { ProductType } from "@/types/product.type";
import ProductView from "@/views/product";
import React from "react";

const serverSide = ({ product }: { product: ProductType[] }) => {
  return (
    <div>
      <ProductView product={product} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/product`);
  const response = await res.json();
  return { props: { product: response.data } };
}

export default serverSide;
