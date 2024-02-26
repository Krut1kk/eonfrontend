// react
import { FC, useEffect, useState } from "react";
// enteties
import { PostList, useGetPostsQuery } from "@/enteties/post";
// hooks
import { useDebounce } from "@/shared/libs/hooks/useDebounce";
// ui
import { Input } from "@/shared/ui/Input";
// styles
import styles from "./DashboardMonitoringPosts.module.scss";

interface DashboardMonitoringPostsProps {}

export const DashboardMonitoringPosts: FC<
  DashboardMonitoringPostsProps
> = ({}) => {
  const [titleQuery, setTitleQuery] = useState("");

  const [descriptionQuery, setDescriptionQuery] = useState("");

  const [authorQuery, setAuthorQuery] = useState("");

  const deboucedTitle = useDebounce(titleQuery, 1000);

  const deboucedDescription = useDebounce(descriptionQuery, 1000);

  const deboucedAuthor = useDebounce(authorQuery, 1000);

  const { isLoading, data, refetch } = useGetPostsQuery({
    title: deboucedTitle,
    description: deboucedDescription,
    author: deboucedAuthor,
  });

  useEffect(() => {
    refetch();
  }, []);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleQuery(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionQuery(e.target.value);
  };

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorQuery(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.DashboardMonitoringPosts}>
      <Input
        onChange={onTitleChange}
        value={titleQuery}
        placeholder="Search by title"
        type="text"
      />
      <Input
        onChange={onDescriptionChange}
        value={descriptionQuery}
        placeholder="Search by description"
        type="text"
      />
      <Input
        onChange={onAuthorChange}
        value={authorQuery}
        placeholder="Search by author"
        type="text"
      />
      <div className={styles.postContainer}>
        <PostList posts={data!} />
      </div>
    </div>
  );
};
