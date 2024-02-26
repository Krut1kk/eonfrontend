// react
import { FC, ReactNode } from "react";
// styles
import styles from "./SideBar.module.scss";

interface SideBarProps {
  children: ReactNode;
}

export const SideBar: FC<SideBarProps> = ({ children }) => {
  return <div className={styles.SideBar}>{children}</div>;
};
