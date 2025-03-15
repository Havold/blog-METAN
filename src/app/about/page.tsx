import React from "react";

import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/assets/universe.jpg"
          alt="Image"
          fill={true}
        />
        <div className={styles.textImg}>
          <span className={styles.name}>Galaxy Storytellers</span>
          <span className={styles.subName}>
            Organization with many successful experts
          </span>
        </div>
      </div>
      <div className={styles.contentContainer}>
        {/* LEFT */}
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quibusdam, quisquam doloribus consectetur aspernatur dolor facilis
            minima blanditiis dicta rerum quos obcaecati iure magnam numquam sed
            veniam est culpa beatae?
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quibusdam, quisquam doloribus consectetur aspernatur dolor facilis
            minima blanditiis dicta rerum quos obcaecati iure magnam numquam sed
            veniam est culpa beatae?
          </p>
        </div>
        {/* RIGHT */}
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            quibusdam, quisquam doloribus consectetur aspernatur dolor facilis
            minima blanditiis dicta rerum quos obcaecati iure magnam numquam sed
            veniam est culpa beatae?
          </p>
          <span>- Dynamic Websites</span>
          <span>- Fast and Handy</span>
          <span>- Mobile Apps</span>
          <Button url="" bgColor="#fff27c">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
