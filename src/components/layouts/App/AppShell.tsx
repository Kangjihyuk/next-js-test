import React from "react";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"), { ssr: false });
type AppShellProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const pathname = useRouter();
  console.log(pathname);
  return (
    <main className={poppins.className}>
      {disabledNavbar.includes(pathname.pathname) ? null : <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
