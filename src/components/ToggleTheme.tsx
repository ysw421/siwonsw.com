'use client'

import { useTheme } from 'next-themes'
import { CiDark, CiLight } from 'react-icons/ci'
import { useState, useEffect } from 'react'

function ThemeIcon() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // SSR 중에는 시스템 테마를 기준으로 아이콘 표시
    return <CiLight />
  }

  // resolvedTheme을 사용하여 시스템 테마도 올바르게 처리
  const currentTheme = resolvedTheme || theme
  
  return currentTheme === 'dark' ? <CiDark /> : <CiLight />
}

export function ToggleThemeRound() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    const currentTheme = resolvedTheme || theme
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <button className="flex justify-center items-center rounded-full bg-white shadow-round text-[--color-ui-font] w-[40px] h-[40px] fixed right-4 bottom-4">
        <CiLight />
      </button>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className="flex justify-center items-center rounded-full bg-white shadow-round text-[--color-ui-font] w-[40px] h-[40px] fixed right-4 bottom-4 transition-all duration-200"
    >
      <ThemeIcon />
    </button>
  )
}

export function ToggleThemeEmojiBtn() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    const currentTheme = resolvedTheme || theme
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <button>
        <div className="flex gap-1 items-center">
          <CiLight />
          Theme
        </div>
      </button>
    )
  }

  return (
    <button onClick={handleToggle}>
      <div className="flex gap-1 items-center">
        <ThemeIcon />
        Theme
      </div>
    </button>
  )
}

