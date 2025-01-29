import React from "react";
import styles from "../styles/error.module.scss";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className={styles.error}>
      <Image src="/not-found.png" alt="404" width={500} height={500} />
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
