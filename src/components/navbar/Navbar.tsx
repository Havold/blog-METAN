"use client";
import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const tab = pathname.split("/")[1];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        metan
      </Link>
      <div className={styles.right}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            className={styles.tab}
            key={link.id}
            href={link.url}
            style={
              tab === link.title.toLowerCase() ||
              (tab === "" && link.title === "Home")
                ? { color: "#4ed6f5" }
                : {}
            }
          >
            {link.title}
          </Link>
        ))}
        {/* <button className={styles.btn}>
          {status === "authenticated" ? "Logout" : "Sign In"}
        </button> */}
        {status === "authenticated" ? (
          <Button
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button url="/dashboard/login">Login</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
