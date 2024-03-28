import { formatCurrency } from '../helpers'
import { MenuItem, OrderItem } from '../types'
import { HiOutlineTrash } from 'react-icons/hi'

type OrderContentsProps = {
	order: OrderItem[]
	deleteItem: (item: MenuItem['id']) => void
}

function OrderContents({ order, deleteItem }: OrderContentsProps) {
	if (order.length === 0) {
		return (
			<div>
				<h2 className='text-center text-blue-400 font-black text-4xl'>Consumption</h2>
				<div className='w-full h-96 flex justify-center items-center'>
					<h2 className='text-2xl font-black text-orange-500'>Order is Empty!</h2>
				</div>
			</div>
		)
	}

	return (
		<div>
			<h2 className='text-center text-blue-400 font-black text-4xl'>Consumption</h2>
			<div className='space-y-2 mt-10'>
				{order.map(item => (
					<div
						key={item.id}
						className='flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b'
					>
						<div>
							<p className='text-lg'>
								{item.name} - {formatCurrency(item.price)}
							</p>
							<p className='font-black'>
								Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
							</p>
						</div>
						<button onClick={() => deleteItem(item.id)}>
							<HiOutlineTrash className='text-red-500 h-8 w-8' />
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default OrderContents
