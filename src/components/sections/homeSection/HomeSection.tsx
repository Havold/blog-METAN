"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./homeSection.module.css";
import Button from "@/components/Button/Button";

const HomeSection = () => {
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
      <div className={`${styles.content} ${isVisible ? styles.animate : ""}`}>
        <div className={`${styles.planet} ${isVisible ? styles.animate : ""}`}>
          <span
            className={`${styles.subTitle} ${isVisible ? styles.animate : ""}`}
          >
            PLANET
          </span>
          <h1 className={`${styles.title} ${isVisible ? styles.animate : ""}`}>
            EARTH
          </h1>
        </div>
        <div
          className={`${styles.line} ${isVisible ? styles.animate : ""}`}
        ></div>
        <p className={`${styles.desc} ${isVisible ? styles.animate : ""}`}>
          {`Learn more about this facinating miracle that we call our home. Planet
          Home. Course enrollment starts today. Early Bird tickets typically last
          a week, don't miss out!`}
        </p>
      </div>
      {/* <button className={`${styles.btn} ${isVisible ? styles.animate : ""}`}>
        GET STARTED
      </button> */}
      <Button url="/contact">GET STARTED</Button>
    </section>
  );
};

export default HomeSection;
