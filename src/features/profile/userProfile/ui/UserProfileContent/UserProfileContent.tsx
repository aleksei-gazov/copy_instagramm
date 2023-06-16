import { useRouter } from 'next/router'

import img1 from '../../../../../../public/test/img1.jpg'
import img2 from '../../../../../../public/test/img2.jpg'
import img3 from '../../../../../../public/test/img3.jpg'
import img4 from '../../../../../../public/test/img4.jpg'
import { PATH } from '../../../../../shared/const/path'
import { useAppDispatch } from '../../../../../shared/hooks/useAppDispatch'
import { useGetPostsQuery } from '../../../../post/getPosts/service/getPosts'
import { setPostId } from '../../../../post/model/slice/loginSlice'

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
  const dispatch = useAppDispatch()
  const postHandler = (id: number) => {
    dispatch(setPostId({ postId: id }))
    console.log(id)
    router.push(PATH.POST)

    return <></>
  }

  return (
    <div className={cls.UserProfileContent}>
      {posts?.items.map(({ id, images, description }) => (
        <div key={id}>
          <Card
            src={images[0] === undefined ? testData[0].src : images[1]?.url}
            alt={'photo'}
            key={id}
            // width={images ? images[1]?.width : 120}
            width={250}
            // height={images ? images[1]?.height : 120}
            height={250}
            //@ts-ignore
            description={description}
            onClick={() => postHandler(id)}
          />
          <div style={{ color: 'white' }}>{description}</div>
        </div>
      ))}
    </div>
  )
}
