import React from 'react'

import { DeletePostComponent } from '../../../features/post/deletePost/ui/DeletePostComponent'

import { getLayout } from 'widgets/Layout/Layout'

const DeletePost = () => {
  return <DeletePostComponent />
}

DeletePost.getLayout = getLayout

export default DeletePost
