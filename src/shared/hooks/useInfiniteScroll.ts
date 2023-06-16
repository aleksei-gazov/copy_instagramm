import { MutableRefObject, useEffect, useRef } from 'react'

interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    console.log('Wrapper Element:', wrapperRef.current)
    console.log('Trigger Element:', triggerRef.current)

    if (typeof window === 'undefined' || !wrapperElement || !triggerElement) {
      return
    }

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    }
    const intersectionObserverCallback: IntersectionObserverCallback = ([entry]) => {
      console.log(entry)
      if (entry.isIntersecting) {
        console.log('isIntersecting')
      }
    }

    observer.current = new IntersectionObserver(intersectionObserverCallback, options)

    observer.current.observe(triggerElement)

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement)
      }
    }
  }, [triggerRef, wrapperRef])
}
