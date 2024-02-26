// react
import { ChangeEvent, FC, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getUserState,
  useUpdateUserMutation,
  userActions,
} from "@/enteties/user";
// ui
import { Input } from "@/shared/ui/Input";
import { Form } from "@/shared/ui/Form";
import { Errors } from "@/shared/ui/Errors";
// styles
import styles from "./DashboardProfileForm.module.scss";
import { Button } from "@/shared/ui/Button";
import { JWT_TOKEN } from "@/shared/libs/constants/jwtToken";

interface DashboardProfileFormProps {}

export const DashboardProfileForm: FC<DashboardProfileFormProps> = ({}) => {
  const { user } = useSelector(getUserState);

  const dispatch = useDispatch();

  const [updateUser, { isLoading, error }] = useUpdateUserMutation();

  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState(user.username || "");

  const [email, setEmail] = useState(user.email || "");

  const [firstName, setFirstName] = useState(user.firstName || "");

  const [lastName, setLastName] = useState(user.lastName || "");

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onSaveClick = () => {
    updateUser({
      id: user.id,
      username,
      email,
      firstName,
      lastName,
    })
      .unwrap()
      .then((data) => {
        if (data && !isLoading) {
          dispatch(
            userActions.setUser({
              jwt: localStorage.getItem(JWT_TOKEN) || "",
              user: data,
            })
          );
          onEditToggle();
        }
      });
  };

  return (
    <div className={styles.container}>
      {/* @ts-ignore */}
      <Errors data={error?.data} />

      <Form>
        <Input
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
          type="text"
          disabled={!isEditing}
        />
        <Input
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
          type="email"
          disabled={!isEditing}
        />
        <Input
          value={firstName}
          onChange={onChangeFirstName}
          placeholder="First Name"
          type="text"
          disabled={!isEditing}
        />
        <Input
          value={lastName}
          onChange={onChangeLastName}
          placeholder="Last Name"
          type="text"
          disabled={!isEditing}
        />

        <div className={styles.buttons}>
          {!isEditing ? (
            <Button onClick={onEditToggle}>Edit</Button>
          ) : (
            <>
              <Button onClick={onSaveClick}>Save</Button>
              <Button onClick={onEditToggle}>Cancel</Button>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};
