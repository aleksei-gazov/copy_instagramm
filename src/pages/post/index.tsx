import React from 'react'

import { MyMenu } from '../../features/post/myPostMenu/MyPostMenu'

import { getLayout } from 'widgets/Layout/Layout'

const Post = () => {
  return <MyMenu />
}

Post.getLayout = getLayout

export default Post
