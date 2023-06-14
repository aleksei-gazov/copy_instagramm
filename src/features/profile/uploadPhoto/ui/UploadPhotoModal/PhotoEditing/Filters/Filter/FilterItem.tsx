import Image from 'next/image'

import testPhoto from '../../../../../../../../../public/test/Aden.jpg'

import cls from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Filters/Filters.module.scss'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
type PropsType = {
  // image: string
  filter: string
  title: string
  // onFilterClick: (filter: string) => void
}
export const FilterItem = ({ filter, title }: PropsType) => {
  return (
    <div className={cls.container}>
      <div className={cls.block}>
        <Image
          src={testPhoto}
          alt={'filter'}
          style={{ filter: filter }}
          width={1000}
          height={1000}
        />
      </div>
      <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} color={TextColorTheme.LIGHT}>
        {title}
      </Text>
    </div>
  )
}
