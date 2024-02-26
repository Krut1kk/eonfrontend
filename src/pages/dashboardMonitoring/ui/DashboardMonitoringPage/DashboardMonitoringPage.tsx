// ui
import { DashboardMonitoringPosts } from "../DashboardMonitoringPosts/DashboardMonitoringPosts";
// styles
import styles from "./DashboardMonitoringPage.module.scss";

const DashboardMonitoringPage = ({}) => {
  return (
    <div className={styles.DashboardMonitoringPage}>
      <DashboardMonitoringPosts />
    </div>
  );
};

export default DashboardMonitoringPage;
