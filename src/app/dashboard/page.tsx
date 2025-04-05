"use client";
import { useSession } from "next-auth/react";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

import styles from "./page.module.css";
import InputField from "@/components/InputField/InputField";
import Image from "next/image";
import {
  AutoGraphRounded,
  CloseRounded,
  CloudRounded,
  DarkModeRounded,
  FlareRounded,
} from "@mui/icons-material";
import Tag from "@/components/Tag/Tag";
import PostWidget from "@/components/PostWidget/PostWidget";
import Button from "@/components/Button/Button";

type PostBlogProps = {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};

const tags = [
  {
    id: 1,
    title: "Imagine",
    subTitle: "Tag",
    icon: <FlareRounded />,
  },
  {
    id: 2,
    title: "Chill",
    subTitle: "Tag",
    icon: <DarkModeRounded />,
  },
  {
    id: 3,
    title: "Interesting",
    subTitle: "Tag",
    icon: <AutoGraphRounded />,
  },
];

const fetcher = (args: string) => {
  return fetch(args).then((res) => res.json());
};

const Dashboard = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { data, error, isLoading } = useSWR(
    `api/posts?username=${session?.user?.username}`,
    fetcher
  );

  const router = useRouter();

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return router.push("/dashboard/login");
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return notFound();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClose = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setImage(null);
    setPreview(null);
  };

  const handleDelete = async (
    e: React.MouseEvent<SVGSVGElement>,
    id: string | number
  ) => {
    e.preventDefault();
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    mutate(`api/posts?username=${session?.user?.username}`);
  };

  const upload = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.imgUrl;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = session?.user?.username;
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;

    let imgUrl = "";
    if (image) {
      imgUrl = await upload(image);
    }

    await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, desc, username, img: imgUrl, content }),
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    setImage(null);
    setPreview(null);

    mutate(`api/posts?username=${session?.user?.username}`);
  };

  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <Image
            className={styles.img}
            src="/assets/gallery_1.jpg"
            alt="Image"
            fill={true}
          />
          <span className={styles.title}>METAN STATION</span>
          <div className={styles.textImg}>
            <span className={styles.name}>Welcome to Dashboard</span>
            <span className={styles.subName}>
              Where you create your own amazing post
            </span>
          </div>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              icon={tag.icon}
              subTitle={tag.subTitle}
              title={tag.title}
            />
          ))}
        </div>
        <span className={styles.title}>Your posts</span>
        <div className={styles.posts}>
          {/* POSTS */}
          {data.length > 0 ? (
            data.map((post: PostBlogProps) => (
              <PostWidget
                key={post._id}
                id={post._id}
                img={post.img}
                title={post.title}
                avatar={"/assets/default-avatar.jpg"}
                username={post.username}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div
              style={{ fontSize: "12px", width: "100%", textAlign: "center" }}
            >
              Don&apos;t have any post yet!
            </div>
          )}
        </div>
      </div>
      <form className={styles.createContainer} onSubmit={handleSubmit}>
        <span className={styles.title}>Add New Post</span>
        <InputField label="Title" name="title" required />
        <InputField label="Description" name="desc" required />
        <div className={styles.textareaContainer}>
          <label className={styles.label} htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            className={styles.textarea}
            name="content"
            placeholder="Content"
            rows={10}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id="upload"
            type="file"
            style={{ display: "none" }}
          />
          {!preview ? (
            <label className={styles.labelContainer} htmlFor="upload">
              <CloudRounded className={styles.icon} id="upload" />
              Upload
            </label>
          ) : (
            <label htmlFor="upload">
              <div className={styles.imgContainer}>
                <CloseRounded onClick={handleClose} className={styles.close} />
                <Image
                  className={styles.img}
                  fill={true}
                  src={preview}
                  alt="Uploaded Picture"
                />
              </div>
            </label>
          )}
        </div>
        <Button width="inherit" bgColor="#4ed6f5" size="small" color="white">
          Create New Post
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
