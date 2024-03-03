import * as React from "react";
import styles from "./author.module.css";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

interface IAuthor {
  readonly author: {
    readonly avatar: string;
    readonly name: string;
    readonly followers: number;
  };
  readonly timestamp: string;
}

function Author({ author, timestamp }: IAuthor): JSX.Element {
  return (
    <div className={styles.author}>
      <Image
        src={author.avatar}
        alt={author.name}
        width={70}
        height={70}
        property="avatar"
        priority
      />
      <div className={styles.info}>
        <h2>{author.name}</h2>
        <p>{`${author.followers} takipçi`}</p>
        <p className={styles.timestamp}>
          {timestamp}
          <span className={styles.dot}></span>
          <BiWorld />
        </p>
      </div>
    </div>
  );
}

export { Author };
