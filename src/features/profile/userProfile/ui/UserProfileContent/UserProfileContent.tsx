import { useRouter } from 'next/router'
import src from 'redux-thunk/src'

import img1 from '../../../../../../public/test/img1.jpg'
import img2 from '../../../../../../public/test/img2.jpg'
import img3 from '../../../../../../public/test/img3.jpg'
import img4 from '../../../../../../public/test/img4.jpg'
import { PATH } from '../../../../../shared/const/path'
import { Loader } from '../../../../../shared/ui/Loader/Loader'
import { useGetPostQuery } from '../../../../post/getPost/service/getPost'
import { useGetPostsQuery } from '../../../../post/getPosts/service/getPosts'

import cls from './UserProfileContent.module.scss'

import { Card } from 'shared/ui/Card/Card'

const testData = [
  { id: 1, src: img1, alt: 'photo' },
  { id: 2, src: img2, alt: 'photo' },
  { id: 3, src: img3, alt: 'photo' },
  { id: 4, src: img4, alt: 'photo' },
  { id: 5, src: img1, alt: 'photo' },
  { id: 6, src: img2, alt: 'photo' },
  { id: 7, src: img3, alt: 'photo' },
  { id: 8, src: img4, alt: 'photo' },
]

export const UserProfileContent = () => {
  const router = useRouter()
  const { data: posts } = useGetPostsQuery(241)
  const postHandler = (id: number) => {
    const { data: post } = useGetPostQuery(id)

    console.log(post)
    router.push(PATH.POST)

    return <></>
  }

  return (
    <div className={cls.UserProfileContent}>
      {posts?.items.map(({ id, images, description }) => (
        <Card
          //@ts-ignore
          src={images ? images : img1}
          alt={'photo'}
          key={id}
          description={description}
          onClick={() => postHandler(id)}
        />
      ))}
    </div>
  )
}
