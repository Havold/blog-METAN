import { notFound } from "next/navigation";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    return notFound;
  }

  return res.json();
};

const Dashboard = async () => {
  const data = await getData();
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
