// react
import { FC } from "react";
// styles
import styles from "./Errors.module.scss";

interface IMessage {
  message: string;
}

export interface ErrorsProps {
  data: {
    error: {
      details: {
        errors: IMessage[];
      };
    };
  };
}

export const Errors: FC<ErrorsProps> = ({ data }) => {
  return (
    <div className={styles.Errors}>
      {data?.error?.details?.errors?.map((error) => (
        <div>{error.message}</div>
      ))}
    </div>
  );
};
