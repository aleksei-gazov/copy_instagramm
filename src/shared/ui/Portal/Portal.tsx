import { useRef, useEffect, useState, ReactNode } from 'react'

import { OverlayProps } from 'next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay'
import { createPortal } from 'react-dom'

import styles from './Overlay.module.scss'

interface PortalProps {
  children: ReactNode
}

export const Portal = (props: OverlayProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal')
    setMounted(true)

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [])

  return mounted && ref.current
    ? createPortal(<div className={styles.overlay}>{props.children}</div>, ref.current)
    : null
}
