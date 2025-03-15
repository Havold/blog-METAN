import React from "react";

import styles from "./gallery.module.css";
import Image from "next/image";
import Link from "next/link";

type GalleryProps = {
  url: string;
  imgUrl: string;
  title: string;
};

const Gallery: React.FC<GalleryProps> = ({ url, imgUrl, title }) => {
  return (
    <Link href={url} className={styles.container}>
      <Image fill={true} className={styles.img} src={imgUrl} alt="picture" />
      <h1 className={styles.title}>{title}</h1>
    </Link>
  );
};

export default Gallery;
