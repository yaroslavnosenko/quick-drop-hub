import { Telegram } from '@twa-dev/types'
import { useEffect, useState } from 'react'

export const useTelegram = () => {
  const [telegram, setTelegram] = useState<Telegram>()

  useEffect(() => {
    if (!window) return
    window.Telegram.WebApp.ready()
    setTelegram(window.Telegram)
  }, [])

  return { telegram, WebApp: telegram?.WebApp }
}
