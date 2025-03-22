import React from "react";
import styles from "./page.module.css";
import Post from "@/components/Post/Post";

type CategoryProps = {
  params: {
    category: string;
  };
};

const data = [
  {
    id: 1,
    title: "Enormous Universe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_1.jpg",
  },
  {
    id: 2,
    title: "Glorious Sun",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_2.jpg",
  },
  {
    id: 3,
    title: "Green Earth",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vitae dolores laudantium magnam voluptatem recusandae fugiat atque amet dolore, earum suscipit ducimus itaque molestiae perspiciatis minus sunt tenetur quaerat exercitationem?",
    imgUrl: "/assets/post_3.jpg",
  },
];

const Category: React.FC<CategoryProps> = async ({ params }) => {
  const { category } = await params;
  if (!category) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Works</h1>
      <span className={styles.category}>{category}</span>
      <div className={styles.items}>
        {data.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            desc={post.desc}
            imgUrl={post.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
