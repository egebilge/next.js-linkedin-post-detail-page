"use client";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import styles from "./header.module.css";
import Divider from "@/components/common/divider";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <BsArrowLeft className={styles.icon} />
        </div>
        <div className={styles.right}>
          <BsThreeDots className={styles.icon} />
        </div>
      </div>
      <Divider />
    </header>
  );
}

export { Header };
