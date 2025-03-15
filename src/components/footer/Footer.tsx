"use client";
import React from "react";

import styles from "./footer.module.css";
import { FacebookOutlined, Instagram, X, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>@2025 Metan. All rights reserved.</div>
      <div className={styles.right}>
        <FacebookOutlined className={styles.icon} />
        <Instagram className={styles.icon} />
        <X className={styles.icon} />
        <YouTube className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
