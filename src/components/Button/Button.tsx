import React from "react";

import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  url?: string;
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  url = undefined,
  bgColor = "#CEE0F1",
  color = "black",
  children,
  onClick,
}) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={styles.btn}
        style={{ color: color, backgroundColor: bgColor }}
      >
        {children}
      </button>
    );
  }

  if (url) {
    return (
      <Link
        className={styles.btn}
        style={{ color: color, backgroundColor: bgColor }}
        href={url}
        passHref
      >
        {children}
      </Link>
    );
  }

  return null;
};

export default Button;
