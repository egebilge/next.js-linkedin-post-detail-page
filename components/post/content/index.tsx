import styles from "./content.module.css";
import Image from "next/image";
import * as React from "react";

interface IContent {
  readonly content: {
    readonly title: string;
    readonly image: string;
  };
}

function Content({ content }: IContent): JSX.Element {
  return (
    <div className={styles.content}>
      <p>{content.title}</p>
      <Image
        src={content.image}
        alt={content.title}
        width={600}
        height={400}
        property="content-image"
        priority
      />
    </div>
  );
}

export { Content };
