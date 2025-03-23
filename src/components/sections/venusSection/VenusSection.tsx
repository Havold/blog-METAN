"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./venusSection.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const VenusSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const currentSection = sectionRef.current; // Lưu giá trị hiện tại vào biến cục bộ

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false); // Reset animation trước
            const target = entry.target as HTMLElement;
            void target.offsetWidth;
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.animate : ""}`}
    >
      {/* LEFT */}
      <div className={styles.left}>
        {/* TITLE */}
        <div className={styles.title}>
          <span className={styles.subTitle}>THE BLUE PLANET</span>
          <h1 className={styles.planetName}>Venus</h1>
        </div>
        {/* DESC */}
        <div className={styles.desc}>
          <div
            className={`${styles.line} ${isVisible ? styles.animate : ""}`}
          ></div>
          <p
            className={styles.content}
          >{`Venus is the third planet from the Sun. Venus's axis of rotation is tilted with respect to its orbital plane, producing seasons on Venus. The gravitational interaction between Venus and the Moon cause tides, stabilizes Venus's orientation on its axis, and gradually slows its rotations.`}</p>
        </div>
        {/* BUTTONS  */}
        <Button url="#" bgColor="#fff27c">
          LEARN MORE
        </Button>
      </div>
      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/assets/venus.png"
            alt="Venus"
          />
        </div>
      </div>
    </section>
  );
};

export default VenusSection;
