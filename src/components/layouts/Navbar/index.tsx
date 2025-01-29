import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h2>{data?.user?.name}</h2>
        {data?.user?.image ? (
          <Image
            src={data.user.image}
            alt={data?.user?.name || ""}
            width={30}
            height={30}
            className={styles.avatar}
          />
        ) : null}
        {!data ? (
          <button onClick={() => signIn()}>sign in</button>
        ) : (
          <button onClick={() => signOut()}>sign out</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
