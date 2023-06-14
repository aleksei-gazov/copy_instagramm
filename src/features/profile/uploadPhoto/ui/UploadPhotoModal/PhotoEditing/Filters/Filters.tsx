import Image from 'next/image'

import testPhoto from '../../../../../../../../public/test/Aden.jpg'

import cls from './Filters.module.scss'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const filters = [
  { id: 1, title: 'Aden' },
  { id: 2, title: 'Clarendon' },
  { id: 3, title: 'Crema' },
  { id: 4, title: 'Gingham' },
  { id: 5, title: 'Juno' },
  { id: 6, title: 'Lark' },
  { id: 7, title: 'Ludwig' },
  { id: 8, title: 'Moon' },
  { id: 9, title: 'Original' },
]

export const Filters = () => {
  return (
    <div className={cls.Filters}>
      <div className={cls.innerWrapper}>
        {filters.map(el => (
          <div className={cls.container} key={el.id}>
            <div className={cls.block}>
              <Image src={testPhoto} alt={'filter'} width={1000} height={1000} />
            </div>
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} color={TextColorTheme.LIGHT}>
              {el.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
