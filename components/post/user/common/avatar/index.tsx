import * as React from "react";
import styles from "./avatar.module.css";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

interface IAvatar {
  readonly user: {
    readonly name: string;
    readonly avatar: string;
  };
}

function Avatar({ user }: IAvatar): JSX.Element {
  return (
    <div className={styles.user}>
      <Image
        src={user.avatar}
        alt={user.name}
        className={styles.avatar}
        width={45}
        height={45}
        property="user-avatar"
        priority
      />
      <IoMdArrowDropdown className={styles.avatarIcon} />
    </div>
  );
}

export { Avatar };
