"use client";
import React, { useContext } from "react";

import styles from "./darkModeToggle.module.css";
import { DarkModeRounded, WbSunnyRounded } from "@mui/icons-material";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`}
    >
      <DarkModeRounded className={styles.moon} fontSize="small" />
      <WbSunnyRounded className={styles.sun} fontSize="small" />
      <div className={styles.ball}></div>
    </div>
  );
};

export default DarkModeToggle;
