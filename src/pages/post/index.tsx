import React from 'react'

import { DeletePostComponent } from '../../features/post/deletePost/ui/DeletePostComponent'

import { getLayout } from 'widgets/Layout/Layout'

const Post = () => {
  return <DeletePostComponent />
}

Post.getLayout = getLayout

export default Post
