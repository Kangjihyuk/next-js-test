import Link from "next/link";
import styles from "./product.module.scss";
import { ProductType } from "@/types/product.type";
const DetailProducts = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1>Detail Product</h1>
      <Link href={`/product/${product.id}`} className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </Link>
    </>
  );
};

export default DetailProducts;
