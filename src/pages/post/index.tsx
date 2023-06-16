import React from 'react'

import { MyPostMenu } from 'features/post/ui/myPostMenu/MyPostMenu'
import { getLayout } from 'widgets/Layout/Layout'

const Post = () => {
  return <MyPostMenu />
}

Post.getLayout = getLayout

export default Post
