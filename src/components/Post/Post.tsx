import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

import styles from "./post.module.css";

type PostProps = {
  title: string;
  desc: string;
  imgUrl: string;
};

const Post: React.FC<PostProps> = ({ title, desc, imgUrl }) => {
  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.contentContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.desc}>{desc}</p>
        <Button url="#">See More</Button>
      </div>
      {/* RIGHT */}
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src={imgUrl}
          alt="Post Image"
        />
      </div>
    </div>
  );
};

export default Post;
