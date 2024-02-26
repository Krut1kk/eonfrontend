// react
import { FC, ReactNode } from "react";
// styles
import styles from "./Form.module.scss";

interface FormProps {
  children: ReactNode;
  title?: string;
}

export const Form: FC<FormProps> = ({ children, title }) => {
  return (
    <div className={styles.Form}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  );
};
