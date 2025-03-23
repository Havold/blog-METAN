"use client";
import { useSession } from "next-auth/react";
import React from "react";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     return notFound;
//   }

//   return res.json();
// };

const Dashboard = () => {
  // const data = await getData();
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);
  return <div>Dashboard</div>;
};

export default Dashboard;
