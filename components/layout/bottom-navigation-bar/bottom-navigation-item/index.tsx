import Link from "next/link";
import * as React from "react";
import styles from "./bottom-navigation-item.module.css";

interface IBottomNavigationItem {
  readonly item: {
    readonly icon: React.ElementType;
    readonly title: string;
    readonly href?: string;
    readonly notification?: number;
  };
  readonly index: number;
  readonly activeIndex: number;
  readonly handleActiveIndex: (index: number) => void;
}

function BottomNavigationItem({
  item,
  index,
  activeIndex,
  handleActiveIndex,
}: IBottomNavigationItem): JSX.Element {
  const Icon = item.icon;
  return (
    <div className={styles.bottomNavItemWrapper}>
      <Link href={item.href || "#"} legacyBehavior>
        <a
          className={index === activeIndex ? styles.active : ""}
          onClick={() => handleActiveIndex(index)}
        >
          <div style={{ position: "relative" }}>
            <Icon className={styles.icon} />
            {item.notification && (
              <span className={styles.notification}>{item.notification}</span>
            )}
          </div>
          <span>{item.title}</span>
        </a>
      </Link>
    </div>
  );
}

export default React.memo(BottomNavigationItem);
