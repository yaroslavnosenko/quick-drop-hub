import { BalanceView, TransactionList } from '@/components'

export default function Home() {
  return (
    <main className="bg-tg-bg text-tg-text px-6">
      <BalanceView />
      <TransactionList />
    </main>
  )
}
