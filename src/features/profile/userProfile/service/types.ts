interface Image {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

interface Post {
  id: number
  description: string
  location: string | null
  images: Image[]
  createdAt: string
  updatedAt: string
}

interface PostsResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: Post[]
}
