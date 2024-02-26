// react
import { FC } from "react";
// ui
import { Post } from "../Post/Post";
// types
import { IPostResponse } from "../../model/types/post";
// styles
import styles from "./PostList.module.scss";

interface PostListProps {
  posts: IPostResponse;
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.PostList}>
      {posts.data.map((post, index) => (
        <Post
          key={index}
          author={post.attributes.author}
          authorId={post.attributes.authorId}
          description={post.attributes.description}
          title={post.attributes.title}
        />
      ))}
    </div>
  );
};
