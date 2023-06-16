export type PostTypeResponse = {
  id: number
  description: string
  location?: any
  images: Images[]
  createdAt: string
  updatedAt: string
}
export type Images = {
  src: string
}
