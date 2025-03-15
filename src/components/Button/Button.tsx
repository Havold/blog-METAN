import React from "react";

import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  url: string;
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  url,
  bgColor = "#CEE0F1",
  color = "black",
  children,
}) => {
  return (
    <Link style={{ width: "fit-content", outline: "none" }} href={url}>
      <button
        className={styles.btn}
        style={{ color: color, backgroundColor: bgColor }}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
