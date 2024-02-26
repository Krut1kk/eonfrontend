// react
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { userActions } from "@/enteties/user";
// api
import { useLoginUserMutation } from "@/features/auth/api/authAPI";
// constants
import { getDashboardRoute } from "@/shared/libs/constants/routes";
// ui
import { Input } from "@/shared/ui/Input";
import { Form } from "@/shared/ui/Form";
import { Button } from "@/shared/ui/Button";
import { Errors } from "@/shared/ui/Errors";
// styles
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  onClick: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onClick }) => {
  const [loginUser, { isLoading, error, isError }] = useLoginUserMutation();

  const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onIdentifierChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    const userData = {
      identifier,
      password,
    };

    loginUser(userData)
      .unwrap()
      .then((data) => {
        if (data && !isLoading) {
          dispatch(userActions.setUser(data));
          navigate(getDashboardRoute());
        }
      });
  };

  return (
    <div className={styles.container}>
      {isError && (
        <>
          {/* @ts-ignore */}
          <Errors data={error?.data} />
          <div>If you have a problems ,please write to admin@gmail.com</div>
        </>
      )}
      <Form title="Login">
        <Input
          type="text"
          placeholder="Username or Email"
          value={identifier}
          onChange={onIdentifierChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={onLoginClick}>Login</Button>
          <div className={styles.pointer} onClick={onClick}>
            Dont have an account?
          </div>
        </div>
      </Form>
    </div>
  );
};
