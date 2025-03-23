"use client";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { FacebookRounded, Google } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

import styles from "./page.module.css";

const Register = () => {
  const handleRegister = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.introduce}>
          Exploring new frontiers, one step at a Time.
        </h1>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create Account</h1>
          <div className={styles.buttons}>
            <Button
              bgColor="#4ed6f5"
              color="white"
              size="small"
              onClick={() => signIn("google")}
            >
              <div className={styles.btn}>
                <Google className={styles.icon} />
                <span>Sign up with Google</span>
              </div>
            </Button>
            <Button size="small" onClick={() => signIn("google")}>
              <div className={styles.btn}>
                <FacebookRounded className={styles.icon} />
                <span>Sign up with Facebook</span>
              </div>
            </Button>
          </div>
          <div className={styles.line}></div>
          <span className={styles.subTitle}>
            Or sign up using your email address
          </span>
        </div>
        <form className={styles.inputs}>
          <InputField label="Email" name="email" />
          <InputField label="Username" name="username" />
          <InputField label="Password" name="password" type="password" />
        </form>
        <div className={styles.footer}>
          <div className={styles.agreement}>
            <input className={styles.checkbox} id="agreement" type="checkbox" />
            <label className={styles.subTitle} htmlFor="agreement">
              I agree to all terms and Privacy Policy
            </label>
          </div>
          <Button
            size="small"
            width="inherit"
            bgColor="#4ed6f5"
            color="white"
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <span className={styles.subTitle}>
            Already have an account?{" "}
            <Link className={styles.link} href="/dashboard/login">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
