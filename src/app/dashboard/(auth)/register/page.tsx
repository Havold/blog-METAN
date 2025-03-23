"use client";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { FacebookRounded, Google } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef, useState } from "react";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const handleRegister = async () => {
    if (!formRef.current) {
      setErr("Some thing went wrong!");
      return;
    }
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password,
        }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Create user successfully");
      }
    } catch (error) {
      console.log(error);
      setErr("Some thing went wrong!");
    }
  };
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
        <form ref={formRef} className={styles.inputs}>
          <InputField required={true} label="Name" name="name" />
          <InputField required={true} label="Email" name="email" />
          <InputField required={true} label="Username" name="username" />
          <InputField
            required={true}
            label="Password"
            name="password"
            type="password"
          />
        </form>
        <div className={styles.footer}>
          {err ? err : ""}
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
