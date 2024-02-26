// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// ui
import { DashboardProfileForm } from "../DashboardProfileForm/DashboardProfileForm";
// styles
import styles from "./DashboardProfilePage.module.scss";

const DashboardProfilePage = ({}) => {
  const { user } = useSelector(getUserState);

  return (
    <div className={styles.DashboardProfilePage}>
      <DashboardProfileForm />
    </div>
  );
};

export default DashboardProfilePage;
