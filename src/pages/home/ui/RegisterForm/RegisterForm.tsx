// react
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { userActions } from "@/enteties/user";
// api
import { useRegisterUserMutation } from "@/features/auth/api/authAPI";
// constants
import { getDashboardRoute } from "@/shared/libs/constants/routes";
// ui
import { Input } from "@/shared/ui/Input";
import { Form } from "@/shared/ui/Form";
import { Errors } from "@/shared/ui/Errors";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./RegisterForm.module.scss";

interface RegisterFormProps {
  onClick: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [registerUser, { isLoading, error, isError }] =
    useRegisterUserMutation();

  if (!isOpen && isError) {
    setIsOpen(true);
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onRegisterClick = () => {
    const user = {
      isAccountConnected: false,
      username,
      email,
      firstName,
      lastName,
      password,
    };

    registerUser(user)
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
      <Form title="Registration">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange}
        />

        <Input
          type="email"
          placeholder={"Email"}
          value={email}
          onChange={onEmailChange}
        />

        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={onFirstNameChange}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={onLastNameChange}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={onRegisterClick}>Register</Button>
          <div className={styles.pointer} onClick={onClick}>
            Already have an account?
          </div>
        </div>
      </Form>
    </div>
  );
};
