// react
import { FC, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// api
import { useGetUserPostsQuery } from "@/enteties/post";
// enteties
import { PostList } from "@/enteties/post/ui/PostList/PostList";
// styles
import styles from "./SourcesUserPosts.module.scss";

interface SourcesUserPostsProps {
  isAdditingSuccess?: boolean;
}

export const SourcesUserPosts: FC<SourcesUserPostsProps> = ({
  isAdditingSuccess,
}) => {
  const { user } = useSelector(getUserState);

  const { data, isLoading, refetch } = useGetUserPostsQuery(user.id);

  useEffect(() => {
    if (isAdditingSuccess) {
      refetch();
    }
  }, [isAdditingSuccess]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.SourcesUserPosts}>
      {!data?.data?.length ? (
        <div>You have no posts</div>
      ) : (
        <>
          <div className={styles.title}>Your Posts</div>
          <div className={styles.postContainer}>
            <PostList posts={data} />
          </div>
        </>
      )}
    </div>
  );
};
