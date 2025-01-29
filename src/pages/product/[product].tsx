import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../api/swr/swr";
import DetailProducts from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const DetailProduct = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${router.query.product}`,
  //   fetcher
  // );

  return (
    <div>
      <DetailProducts product={product} />
      {/* <DetailProducts product={isLoading ? {} : data.data} /> */}
    </div>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();
  return { props: { product: response.data } };
}

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();
//   const paths = response.data.map((product: ProductType) => ({
//     params: { product: product.id },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: any }) {
//   console.log(params.product);
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();
//   return { props: { product: response.data } };
// }

export default DetailProduct;
