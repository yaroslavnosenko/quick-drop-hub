import { useTelegram } from '@/hooks'

export default function Home() {
  const { WebApp } = useTelegram()
  return (
    <main className="bg-tg-bg min-h-screen text-tg-text">
      {WebApp?.themeParams.bg_color}
    </main>
  )
}
