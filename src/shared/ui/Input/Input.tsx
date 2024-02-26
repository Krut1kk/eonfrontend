// react
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
}) => {
  return (
    <input
      disabled={disabled}
      className={styles.Input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};
