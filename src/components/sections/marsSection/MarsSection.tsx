"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./marsSection.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const MarsSection = () => {
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
    // <section ref={sectionRef} className={styles.section}>
    //   <div className={`${styles.content} ${isVisible ? styles.animate : ""}`}>
    //     <div className={`${styles.planet} ${isVisible ? styles.animate : ""}`}>
    //       <span
    //         className={`${styles.subTitle} ${isVisible ? styles.animate : ""}`}
    //       >
    //         THE BLUE PLANET
    //       </span>
    //       <h1 className={`${styles.title} ${isVisible ? styles.animate : ""}`}>
    //         Mars
    //       </h1>
    //     </div>
    //     <div
    //       className={`${styles.line} ${isVisible ? styles.animate : ""}`}
    //     ></div>
    //     <p className={`${styles.desc} ${isVisible ? styles.animate : ""}`}>
    //       {`Learn more about this facinating miracle that we call our home. Planet
    //       Mars. Course enrollment starts today. Early Bird tickets typically last
    //       a week, don't miss out!`}
    //     </p>
    //   </div>
    //   <button className={`${styles.btn} ${isVisible ? styles.animate : ""}`}>
    //     LEARN MORE
    //   </button>
    // </section>

    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.animate : ""}`}
    >
      {/* LEFT */}
      <div className={styles.left}>
        {/* TITLE */}
        <div className={styles.title}>
          <span className={styles.subTitle}>THE BLUE PLANET</span>
          <h1 className={styles.planetName}>Mars</h1>
        </div>
        {/* DESC */}
        <div className={styles.desc}>
          <div
            className={`${styles.line} ${isVisible ? styles.animate : ""}`}
          ></div>
          <p
            className={styles.content}
          >{`Mars is the third planet from the Sun. Mars's axis of rotation is tilted with respect to its orbital plane, producing seasons on Mars. The gravitational interaction between Mars and the Moon cause tides, stabilizes Mars's orientation on its axis, and gradually slows its rotations.`}</p>
        </div>
        {/* BUTTONS  */}
        <Button url="" bgColor="#EA5443" color="white">
          LEARN MORE
        </Button>
      </div>
      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <Image fill={true} src="/assets/mars.png" alt="Mars" />
        </div>
      </div>
    </section>
  );
};

export default MarsSection;
