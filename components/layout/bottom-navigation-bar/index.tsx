"use client";

import React from "react";
import styles from "./bottom-navigation-bar.module.css";
import { bottomNavItems } from "@/mocks/bottom-navigation-bar/bottom-nav-items";
import BottomNavigationItem from "./bottom-navigation-item";

function BottomNavigationBar(): JSX.Element {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.bottomNav}>
      {bottomNavItems.map((item, index) => (
        <div key={index} className={styles.bottomNavItem}>
          <BottomNavigationItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            handleActiveIndex={handleActiveIndex}
          />
        </div>
      ))}
    </div>
  );
}

export { BottomNavigationBar };
