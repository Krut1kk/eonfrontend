// react
import { useState } from "react";
// ui
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
// styles
import styles from "./HomePage.module.scss";

const HomePage = ({}) => {
  const [isRegistered, setRegistered] = useState(false);

  const onRegisteredToggle = () => {
    setRegistered(!isRegistered);
  };

  return (
    <div className={styles.HomePage}>
      {isRegistered ? (
        <LoginForm onClick={onRegisteredToggle} />
      ) : (
        <RegisterForm onClick={onRegisteredToggle} />
      )}
    </div>
  );
};

export default HomePage;
