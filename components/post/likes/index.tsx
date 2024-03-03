import { SlLike } from "react-icons/sl";
import styles from "./likes.module.css";

interface ILikes {
  readonly likes: string;
}

function Likes({ likes }: ILikes): JSX.Element {
  return (
    <div className={styles.likes}>
      <SlLike />
      <p>{likes}</p>
    </div>
  );
}

export { Likes };
