"use client";

import * as React from "react";
import styles from "./actions-bar.module.css";
import { actionBarItems } from "@/mocks/actions-bar/action-bar-items";
import { Avatar } from "../common/avatar";
import ActionBarItem from "./action-bar-item";

interface IActionsBar {
  readonly user: {
    readonly name: string;
    readonly avatar: string;
  };
}

function ActionsBar({ user }: IActionsBar): JSX.Element {
  return (
    <div className={styles.actions}>
      <Avatar user={user} />
      {actionBarItems.map((item, index) => {
        return (
          <div key={index}>
            <ActionBarItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

export { ActionsBar };
