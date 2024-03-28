import { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {
	order: OrderItem[]
	tip: number
	placeOrder: () => void
}

function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
	const subTotal = useMemo(
		() => order.reduce((total, item) => total + item.quantity * item.price, 0),
		[order]
	)
	const tipAmount = useMemo(() => subTotal * tip, [tip, order])
	const totalPayable = useMemo(() => subTotal + tipAmount, [tip, order])

	return (
		<>
			<div className='space-y-2'>
				<h2 className='font-black text-2xl text-orange-500'>Totals & Tip:</h2>
				<p>
					Subtotal:{''}
					<span className='font-bold'>{formatCurrency(subTotal)}</span>
				</p>
				<p>
					Tip:{''}
					<span className='font-bold'>{formatCurrency(tipAmount)}</span>
				</p>
				<p>
					Total Payable:{''}
					<span className='font-bold'>{formatCurrency(totalPayable)}</span>
				</p>
			</div>
			<button
				className='w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-5'
				disabled={totalPayable === 0}
				onClick={placeOrder}
			>
				Save Order
			</button>
		</>
	)
}

export default OrderTotal
