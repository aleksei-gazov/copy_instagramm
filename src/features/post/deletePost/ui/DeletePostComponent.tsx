import { FC, memo, useState } from 'react'

import { useRouter } from 'next/router'

import DeletePostImage from '../../../../../public/icon/delete.svg'
import { PATH } from '../../../../shared/const/path'
import { Loader } from '../../../../shared/ui/Loader/Loader'
import { useDeletePostMutation } from '../service/deletePost'

import cls from './DeletePostComponent.module.scss'

import { Modal } from 'features/auth/logOut/modal/modal'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface DeletePostComponentProps {
  className?: string
}

export const DeletePostComponent: FC<DeletePostComponentProps> = memo(({ className = '' }) => {
  const router = useRouter()
  const deletePostHandler = () => {
    setShowModal(true)
  }
  const [DeletePost, { isLoading, isSuccess }] = useDeletePostMutation()
  const [showModal, setShowModal] = useState<boolean>(false) //modal
  const closeModal = () => {
    setShowModal(false)
  }
  //TODO
  //postId hardcode
  const postId = 91
  const onSubmit = () => {
    DeletePost(postId)
    setShowModal(false)
  }

  if (isLoading) return <Loader />

  if (isSuccess) {
    router.push(PATH.PROFILE)

    return <></>
  }

  return (
    <div className={classNames('', {}, [])}>
      <Button className={cls.btn} theme={ButtonTheme.Clear} onClick={deletePostHandler}>
        <DeletePostImage />
        <Text
          tag={'span'}
          className={className}
          font={TextFontTheme.INTER_MEDIUM_L}
          color={TextColorTheme.LIGHT}
        >
          Delete Post
        </Text>
      </Button>
      <Modal title={'Delete Post'} active={showModal} onClose={closeModal} onSubmit={onSubmit}>
        <Text
          tag={'p'}
          font={TextFontTheme.INTER_REGULAR_XL}
        >{`Are you sure you want to delete this post?`}</Text>
      </Modal>
    </div>
  )
})
