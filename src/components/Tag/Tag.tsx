import React from "react";

import styles from "./tag.module.css";

type TagProps = {
  subTitle: string;
  title: string;
  icon: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ subTitle, icon, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.contentContainer}>
        <span className={styles.subTitle}>{subTitle}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default Tag;
