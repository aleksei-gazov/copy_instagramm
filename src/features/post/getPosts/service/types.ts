export type PostTypeResponse = {
  id: number
  description: string
  location?: any
  images: any[]
  createdAt: string
  updatedAt: string
}
export type PostsResponseType = {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: PostTypeResponse[]
}
