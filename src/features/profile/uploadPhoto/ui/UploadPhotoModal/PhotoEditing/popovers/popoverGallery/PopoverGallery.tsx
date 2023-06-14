import { Popover } from '@headlessui/react'

import SelectGalleryIcon from '../../../../../../../../../public/icon/select-gallery.svg'

import cls from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popoverGallery/PopoverGallery.module.scss'
import clsG from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/popovers/popovers.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export const PopoverGallery = () => {
  return (
    <Popover>
      <Popover.Panel className={classNames(clsG.popoverPanel, {}, [cls.popoverPanel])}>
        <div className={cls.itemContainer}>
          <p>eerwer</p>
          <p>werwer</p>
          <p>werwer</p>
        </div>
      </Popover.Panel>

      <Popover.Button className={clsG.popoverButton}>
        <SelectGalleryIcon />
      </Popover.Button>
    </Popover>
  )
}
