'use client'
import { useEffect, useState } from 'react'
export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const fn = () => {
      const { scrollTop:t, scrollHeight:h, clientHeight:c } = document.documentElement
      setP((t/(h-c))*100)
    }
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="fixed top-0 left-0 z-[99999] h-[2px] bg-lime" style={{ width:`${p}%`, transition:'width 60ms linear' }} />
}
