import { useState } from "react";
import styles from "./login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const callbackUrl: any = router.query.callbackUrl || "/";
  const handleSubmit = async (e: any) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("invalid email or password");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("invalid email or password");
    }
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      {error && <p className={styles.login__error}>{error}</p>}
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className={styles.login__form__item__input}
            />
          </div>
          <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className={styles.login__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={styles.login__form__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "login"}
          </button>
        </form>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirect: false,
            })
          }
          style={{
            border: "none",
            display: "block",
            margin: "10px auto",
          }}
        >
          sign in with google
        </button>
      </div>
      <p className={styles.login__link}>
        Don't Have an account? Sign up <Link href="/auth/register">here</Link>
      </p>
    </div>
  );
};

export default LoginView;
