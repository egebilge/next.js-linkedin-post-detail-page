interface IPost {
  readonly author: {
    readonly avatar: string;
    readonly name: string;
    readonly followers: number;
  };
  readonly content: {
    readonly title: string;
    readonly image: string;
  };
  readonly timestamp: string;
  readonly likes: string;
  readonly user: {
    readonly name: string;
    readonly avatar: string;
  };
}

export type { IPost };
