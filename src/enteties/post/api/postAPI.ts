// api
import { strapiAPI } from "@/shared/api/strapiAPI";
// types
import { IPost, IPostRequestParams, IPostResponse } from "../model/types/post";

const postAPI = strapiAPI.injectEndpoints({
  endpoints: (build) => ({
    publishPost: build.mutation<null, IPost>({
      query: (post) => ({
        url: `/posts`,
        method: "POST",
        body: {
          data: {
            ...post,
          },
        },
      }),
    }),
    getUserPosts: build.query<IPostResponse, number | null>({
      query: (authorId) => ({
        url: `/posts?filters[authorId]=${authorId}`,
        method: "GET",
      }),
    }),
    getPosts: build.query<IPostResponse, IPostRequestParams>({
      query: (params) => ({
        url: `/posts?filters[title][$contains]=${params.title}&filters[description][$contains]=${params.description}&filters[author][$startsWith]=${params.author}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePublishPostMutation,
  useGetUserPostsQuery,
  useGetPostsQuery,
} = postAPI;
