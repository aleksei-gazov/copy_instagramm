import React, { useCallback, useState } from 'react'

import cls from './UserProfileContent.module.scss'

import { Post } from 'features/post/ui/Post'
import { useGetPostsQuery } from 'features/profile/userProfile/service/posts'
import { getUserId } from 'shared/hoc'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Card } from 'shared/ui/Card/Card'
import { Loader } from 'shared/ui/Loader/Loader'

export const UserProfileContent = () => {
  const [currentId, setCurrentId] = useState<null | number>(null)
  const userId = useAppSelector(getUserId)

  const { data, isLoading } = useGetPostsQuery(userId, {
    skip: !userId,
  })

  const getCurrentPostId = useCallback((id: number | null) => {
    setCurrentId(id)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className={cls.UserProfileContent}>
      {data &&
        data?.items.map(el => (
          <Card
            id={el.id}
            key={el.id}
            callBack={getCurrentPostId}
            src={el.images[0].url}
            alt={el.description}
          />
        ))}
      {currentId && <Post callBack={getCurrentPostId} currentId={currentId} />}
    </div>
  )
}
