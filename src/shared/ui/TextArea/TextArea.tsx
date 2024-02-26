// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled?: boolean;
}

export const TextArea: FC<TextAreaProps> = ({
  onChange,
  placeholder,
  value,
  disabled,
}) => {
  return (
    <textarea
      className={styles.TextArea}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  );
};
