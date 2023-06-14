import { useRouter } from 'next/router'

import img1 from '../../../../../../public/test/img1.jpg'
import img2 from '../../../../../../public/test/img2.jpg'
import img3 from '../../../../../../public/test/img3.jpg'
import img4 from '../../../../../../public/test/img4.jpg'
import { PATH } from '../../../../../shared/const/path'
import { Loader } from '../../../../../shared/ui/Loader/Loader'
import { useGetPostQuery } from '../../../../post/getPost/service/getPost'

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
  const { data: posts } = useGetPostQuery(117)

  console.log(posts)
  const postHandler = (id: number) => {
    // router.push(PATH.POST)
    console.log(id)
    console.log(posts)
    // return <></>
  }

  return (
    <div className={cls.UserProfileContent}>
      {testData.map(({ id, src, alt }) => (
        <Card src={src} alt={alt} key={id} onClick={() => postHandler(id)} />
      ))}
    </div>
  )
}
