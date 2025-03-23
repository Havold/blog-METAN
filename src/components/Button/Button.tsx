import React from "react";

import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  url?: string;
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  width?: string;
};

const Button: React.FC<ButtonProps> = ({
  url = undefined,
  bgColor = "#CEE0F1",
  color = "black",
  children,
  onClick,
  size = "medium",
  width = "fit-content",
}) => {
  let paddingSize: string;
  switch (size) {
    case "small":
      paddingSize = "12px 20px";
      break;
    case "medium":
    case "large":
      paddingSize = "16px 36px";
      break;
    default:
      paddingSize = "16px 36px";
  }
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={styles.btn}
        style={{
          padding: paddingSize,
          color: color,
          backgroundColor: bgColor,
          width: width,
        }}
      >
        {children}
      </button>
    );
  }

  if (url) {
    return (
      <Link
        className={styles.btn}
        style={{
          padding: paddingSize,
          color: color,
          backgroundColor: bgColor,
          width: width,
        }}
        href={url}
      >
        {children}
      </Link>
    );
  }

  return null;
};

export default Button;
