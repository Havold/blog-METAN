import React from "react";

import styles from "./page.module.css";
import Gallery from "@/components/Gallery/Gallery";

export const metadata = {
  title: "Portfolio",
  description: "This is Portfolio page",
};

const data = [
  {
    id: 1,
    url: "illustrations",
    imgUrl: "/assets/gallery_1.jpg",
    title: "Illustrations",
  },
  {
    id: 2,
    url: "websites",
    imgUrl: "/assets/gallery_2.jpg",
    title: "Websites",
  },
  {
    id: 3,
    url: "applications",
    imgUrl: "/assets/gallery_3.jpg",
    title: "Applications",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Works</h1>
      <span className={styles.selectTitle}>Choose a gallery</span>
      <div className={styles.items}>
        {data.map((gallery) => (
          <Gallery
            url={`/portfolio/${gallery.url}`}
            key={gallery.id}
            imgUrl={gallery.imgUrl}
            title={gallery.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
