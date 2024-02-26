// react
import { ReactNode } from "react";
// ui
import { Portal } from "@/shared/ui/Portal";
// styles
import styles from "./Modal.module.scss";

interface ModalProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props;

  return isOpen ? (
    <Portal>
      <div className={styles.Modal}>
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  ) : null;
};
