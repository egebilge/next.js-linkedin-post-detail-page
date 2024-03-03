"use client";

import { Author } from "@/components/post/author";
import React from "react";
import styles from "./post.module.css";
import { Content } from "@/components/post/content";
import { Likes } from "@/components/post/likes";
import Divider from "@/components/common/divider";
import { usePost } from "@/hooks/usePost";
import { ActionsBar } from "@/components/post/user/actions-bar";
import { Comment } from "@/components/post/user/comment";

function PostContainer(): JSX.Element {
  const { post, loading, error } = usePost();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  const { author, content, timestamp, likes, user } = post;

  return (
    <div className={styles.post}>
      <Author author={author} timestamp={timestamp} />
      <Content content={content} />
      <Likes likes={likes} />
      <Divider width="95%" />
      <ActionsBar user={user} />
      <Divider />
      <Comment user={user} />
    </div>
  );
}

export { PostContainer };
