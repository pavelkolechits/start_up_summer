import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};
