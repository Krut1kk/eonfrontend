// react
import { FC } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// user
import {
  getUserState,
  useUpdateUserMutation,
  userActions,
} from "@/enteties/user";
// contants
import { JWT_TOKEN } from "@/shared/libs/constants/jwtToken";
// styles
import { Button } from "@/shared/ui/Button";

interface DashboardAccountConnectButtonProps {}

export const DashboardAccountConnectButton: FC<
  DashboardAccountConnectButtonProps
> = ({}) => {
  const { user } = useSelector(getUserState);

  const dispatch = useDispatch();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const onToggleConnectAccountClick = () => {
    updateUser({
      id: user.id,
      isAccountConnected: !user.isAccountConnected,
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
        }
      });
  };

  return user.isAccountConnected ? (
    <Button onClick={onToggleConnectAccountClick}>Disconnect To System</Button>
  ) : (
    <Button onClick={onToggleConnectAccountClick}>
      Connect Account to System
    </Button>
  );
};
