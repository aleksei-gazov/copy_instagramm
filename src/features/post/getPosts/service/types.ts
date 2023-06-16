export type PostTypeResponse = {
  id: number
  description: string
  location?: any
  images: Images[]
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
export type Images = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}
