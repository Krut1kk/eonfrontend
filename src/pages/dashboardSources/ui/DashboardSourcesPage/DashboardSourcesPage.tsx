// react
import { useState } from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// constants
import { getDashboardAccountConnectRoute } from "@/shared/libs/constants/routes";
// ui
import { AddPostToSourcesForm } from "../AddPostToSourcesForm/AddPostToSourcesForm";
import { SourcesUserPosts } from "../SourcesUserPosts/SourcesUserPosts";
// styles
import styles from "./DashboardSourcesPage.module.scss";

const DashboardSourcesPage = ({}) => {
  const { user } = useSelector(getUserState);

  const [isAdditingSuccess, setIsAdditingSuccess] = useState(false);

  return (
    <div className={styles.DashboardSourcesPage}>
      {user.isAccountConnected ? (
        <>
          <AddPostToSourcesForm setIsAdditingSuccess={setIsAdditingSuccess} />
          <SourcesUserPosts isAdditingSuccess={isAdditingSuccess} />
        </>
      ) : (
        <>
          <div className={styles.text}>
            Please ,connect your account to System
          </div>
          <Link to={getDashboardAccountConnectRoute()}>
            <div> Go to Account Connect page</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default DashboardSourcesPage;
