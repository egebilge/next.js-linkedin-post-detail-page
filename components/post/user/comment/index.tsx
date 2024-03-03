import React from "react";
import { Avatar } from "../common/avatar";
import styles from "./comment.module.css";
import { FiAtSign } from "react-icons/fi";

interface IComment {
  readonly user: {
    readonly name: string;
    readonly avatar: string;
  };
}

function Comment({ user }: IComment): JSX.Element {
  return (
    <div className={styles.comment}>
      <Avatar user={user} />
      <input
        type="text"
        placeholder="Düşüncelerinizi buraya yazın..."
        className={styles.input}
      />
      <FiAtSign className={styles.icon} />
      <span className={styles.rightText}>Yayınla</span>
    </div>
  );
}

export { Comment };
