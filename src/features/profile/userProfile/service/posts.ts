import { PostsResponse } from 'features/profile/userProfile/service/types'
import { baseAPI } from 'shared/api/baseAPI'

const posts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<PostsResponse, number>({
      query: (userId: number) => ({
        url: `api/posts/${userId}`,
      }),
    }),
  }),
})

export const { useGetPostsQuery } = posts
