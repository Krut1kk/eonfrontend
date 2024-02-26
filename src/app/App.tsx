// config
import { AppRouter } from "./config/route";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
};

export default App;
