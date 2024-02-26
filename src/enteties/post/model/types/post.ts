export interface IPost {
  authorId: number;
  description: string;
  title: string;
  author: string;
}

export interface IPostItemFromResponse {
  attributes: IPost;
}

export interface IPostResponse {
  data: IPostItemFromResponse[];
}

export interface IPostRequestParams {
  title?: string;
  description?: string;
  author?: string;
}
