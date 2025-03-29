"use client";
import React from "react";

import styles from "./page.module.css";
import InputField from "@/components/InputField/InputField";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1 className={styles.title}>Login</h1>
        <form
          className={styles.form}
          action={async (formData) => {
            const data = Object.fromEntries(formData.entries());
            await signIn("credentials", data);
          }}
        >
          <InputField required label="Email" name="email" />
          <InputField
            required
            label="Password"
            name="password"
            type="password"
          />
          <div className={styles.optContainer}>
            <div className={styles.rememberContainer}>
              <input
                className={styles.checkbox}
                id="agreement"
                type="checkbox"
              />
              <label style={{ cursor: "pointer" }} htmlFor="agreement">
                Remember me
              </label>
            </div>

            <Link href="#">Forgot Password?</Link>
          </div>

          <Button size="small" width="inherit" bgColor="#4ed6f5" color="white">
            Login
          </Button>
        </form>

        <span className={styles.subTitle}>
          Don&apos;t have an account?{" "}
          <Link className={styles.link} href="/dashboard/register">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
