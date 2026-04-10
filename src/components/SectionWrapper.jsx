import React, { useEffect, useRef } from 'react'

export default function SectionWrapper({ children, className = '', id }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`section-fade ${className}`}>
      {children}
    </section>
  )
}
