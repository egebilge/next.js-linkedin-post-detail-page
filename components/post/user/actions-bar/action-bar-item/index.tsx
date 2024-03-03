import * as React from "react";
import styles from "./action-bar-item.module.css";

interface IActionBarItem {
  readonly item: {
    readonly icon: React.ElementType;
    readonly title: string;
  };
}

function ActionBarItem({ item }: IActionBarItem) {
  const Icon = item.icon;
  return (
    <div className={styles.action}>
      <Icon className={styles.icon} />
      <span>{item.title}</span>
    </div>
  );
}

export default React.memo(ActionBarItem);
