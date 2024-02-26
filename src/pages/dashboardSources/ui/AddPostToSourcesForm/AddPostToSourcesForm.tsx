// react
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// api
import { usePublishPostMutation } from "@/enteties/post/api/postAPI";
// ui
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { TextArea } from "@/shared/ui/TextArea/TextArea";
// styles
import styles from "./AddPostToSourcesForm.module.scss";

interface AddPostToSourcesFormProps {
  setIsAdditingSuccess: Dispatch<SetStateAction<boolean>>;
}

export const AddPostToSourcesForm: FC<AddPostToSourcesFormProps> = ({
  setIsAdditingSuccess,
}) => {
  const { user } = useSelector(getUserState);

  const [publishPost, { isSuccess }] = usePublishPostMutation();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsAdditingSuccess(true);
    } else {
      setIsAdditingSuccess(false);
    }
  }, [isSuccess]);

  const onAddPostClick = () => {
    if (user.id && user.username) {
      publishPost({
        title,
        description,
        author: user.username,
        authorId: user.id,
      });
      setTitle("");
      setDescription("");
    }
  };

  const isButtonDisabled = !title.trim() || !description.trim();

  return (
    <div className={styles.AddPostToSourcesForm}>
      <Input
        onChange={onTitleChange}
        value={title}
        placeholder="Title"
        type="text"
      />
      <TextArea
        onChange={onDescriptionChange}
        value={description}
        placeholder="Description"
      />

      <Button disabled={isButtonDisabled} onClick={onAddPostClick}>
        Add post to source
      </Button>
    </div>
  );
};
