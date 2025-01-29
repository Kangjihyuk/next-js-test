import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Detail Product</h1>
      <p>
        nama Product{" "}
        {`${router.query.slug ? router.query.slug[0] : ""} - ${
          router.query.slug ? router.query.slug[1] : ""
        }`}
      </p>
    </div>
  );
};

export default Shop;
