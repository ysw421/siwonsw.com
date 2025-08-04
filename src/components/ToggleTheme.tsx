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
    return <CiLight size={20} />
  }

  const currentTheme = resolvedTheme || theme
  
  return currentTheme === 'dark' ? <CiDark size={20} /> : <CiLight size={20} />
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
      <button className="theme-toggle flex justify-center items-center rounded-full w-[44px] h-[44px] fixed right-4 bottom-4">
        <CiLight size={20} />
      </button>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle flex justify-center items-center rounded-full w-[44px] h-[44px] fixed right-4 bottom-4"
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
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
      <button className="theme-toggle px-3 py-2 rounded-lg">
        <div className="flex gap-2 items-center">
          <CiLight size={18} />
          <span className="text-sm font-medium">Theme</span>
        </div>
      </button>
    )
  }

  return (
    <button 
      onClick={handleToggle}
      className="theme-toggle px-3 py-2 rounded-lg"
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="flex gap-2 items-center">
        <ThemeIcon />
        <span className="text-sm font-medium">Theme</span>
      </div>
    </button>
  )
}

