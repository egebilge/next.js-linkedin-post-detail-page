const PostService = {
  getPost: async () => {
    try {
      const response = await fetch("/post.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export { PostService };
