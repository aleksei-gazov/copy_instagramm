import { baseAPI } from 'shared/api/baseAPI'

const getPosts = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPostsWithPagination: build.query<PostsResponse, number>({
      query: userId => {
        return {
          method: 'GET',
          url: `/api/posts/${userId}`,
        }
      },
    }),
  }),
})

export const { useGetPostsWithPaginationQuery } = getPosts
