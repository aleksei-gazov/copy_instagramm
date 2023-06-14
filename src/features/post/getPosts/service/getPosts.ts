import { PostsResponseType } from './types'

import { baseAPI } from 'shared/api/baseAPI'

export const GetPosts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponseType, number>({
      query: arg => {
        return {
          url: `/api/posts/${arg}`,
        }
      },
      //TODO
    }),
  }),
})

export const { useGetPostsQuery } = GetPosts
