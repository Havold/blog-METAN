"use client";
import React from "react";

import styles from "./postWidget.module.css";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

type PostWidgetProps = {
  id: string | number;
  title: string;
  username: string;
  role?: "member" | "admin";
  img: string;
  avatar: string;
  handleDelete: (
    e: React.MouseEvent<SVGSVGElement>,
    id: string | number
  ) => void;
};

const PostWidget: React.FC<PostWidgetProps> = ({
  id,
  title,
  username,
  role = "member",
  img,
  avatar,
  handleDelete,
}) => {
  return (
    <Link href={`/blog/${id}`} className={styles.container}>
      <CloseRounded
        className={styles.close}
        onClick={(e) => handleDelete(e, id)}
      />
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src={img}
          alt="Post Picture"
        />
      </div>
      <span className={styles.title}>{title}</span>
      <div className={styles.line}></div>
      <div className={styles.authorContainer}>
        <div className={styles.avatarContainer}>
          <Image
            fill={true}
            className={styles.avatar}
            src={avatar}
            alt="Avatar"
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.username}>{username}</h1>
          <span className={styles.role}>{capitalize(role)}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostWidget;
