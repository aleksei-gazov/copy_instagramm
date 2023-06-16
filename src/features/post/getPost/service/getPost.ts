import { PostTypeResponse } from './types'

import { baseAPI } from 'shared/api/baseAPI'

export const GetPost = baseAPI.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<PostTypeResponse, number>({
      query: arg => {
        return {
          url: `/api/posts/p/${arg}`,
        }
      },
      //TODO
    }),
  }),
})

export const { useGetPostQuery } = GetPost
