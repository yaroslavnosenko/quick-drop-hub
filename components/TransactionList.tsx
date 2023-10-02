import { FiRefreshCcw } from 'react-icons/fi'
export const TransactionList = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Transactions</p>
        <button className="h-10 w-10 -mr-2 text-tg-link flex items-center justify-center">
          <FiRefreshCcw />
        </button>
      </div>
    </div>
  )
}
