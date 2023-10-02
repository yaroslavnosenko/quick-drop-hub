import { FiPackage, FiShoppingBag } from 'react-icons/fi'

export const BalanceView = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <p className="text-sm mb-1 text-tg-hint">Current Balance</p>
      <p className="font-bold text-5xl">$0.00</p>
      <div className="flex w-full gap-4 mt-6">
        <button className="flex-1 font-medium bg-tg-button rounded-md h-10 flex items-center justify-center gap-2 text-tg-button-text">
          <FiShoppingBag />
          Market
        </button>
        <button className="flex-1 font-medium  bg-tg-secondary  rounded-md h-10 flex items-center justify-center gap-2">
          <FiPackage />
          My Drops
        </button>
      </div>
    </div>
  )
}
