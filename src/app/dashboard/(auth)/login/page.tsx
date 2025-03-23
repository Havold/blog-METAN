"use client";
import Button from "@/components/Button/Button";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign In with Google</Button>
      {/* <button onClick={() => signIn("google")}>Sing In with Google</button> */}
    </div>
  );
};

export default Login;
