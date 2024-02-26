// react
import { FC } from "react";
// types
import { IPost } from "../../model/types/post";
// styles
import styles from "./Post.module.scss";

interface PostProps extends IPost {}

export const Post: FC<PostProps> = ({
  author,
  authorId,
  description,
  title,
}) => {
  return (
    <div className={styles.Post}>
      <div>{title}</div>
      <div className={styles.description}>{description}</div>
      <div>Author : {author}</div>
    </div>
  );
};
