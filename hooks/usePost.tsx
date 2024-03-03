import { IPost } from "@/utils/IPost";
import * as React from "react";
import { PostService } from "@/services/post";

function usePost() {
  const [post, setPost] = React.useState<IPost | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    async function getPost() {
      try {
        const post = await PostService.getPost();
        setPost(post);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    getPost();
  }, []);

  const data = React.useMemo(
    () => ({ post, loading, error }),
    [post, loading, error]
  );

  return data;
}

export { usePost };
