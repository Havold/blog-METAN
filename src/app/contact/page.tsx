import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={400}
            height={400}
            src="/assets/contact.png"
            alt="contact"
          />
        </div>
        {/* RIGHT */}
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            rows={10}
          />
          <Button url="#">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
