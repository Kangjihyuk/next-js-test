import { ProductType } from "@/types/product.type";
import styles from "./Product.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductView = ({ product }: { product: ProductType[] }) => {
  console.log(product);
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>product</h1>
      <div className={styles.product__content}>
        {product?.length > 0 ? (
          <>
            {product?.map((item: ProductType) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id}
                className={styles.product__content__item}
              >
                <div className={styles.product__content__item__image}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                  />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {item.name}
                </h4>
                <p className={styles.product__content__item__category}>
                  {item.category}
                </p>
                <p className={styles.product__content__item__price}>
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </Link>
            ))}{" "}
          </>
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
