import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal<T extends HTMLElement>(selector = '.reveal') {
  const scope = useRef<T | null>(null)

  useEffect(() => {
    if (!scope.current) return
    const targets = scope.current.querySelectorAll(selector)
    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, scope)

    return () => ctx.revert()
  }, [selector])

  return scope
}
