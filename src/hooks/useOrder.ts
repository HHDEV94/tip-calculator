import { useState } from 'react'
import type { OrderItem, MenuItem } from '../types'

function useOrder() {
	const [order, setOrder] = useState<OrderItem[]>([])
	const [tip, setTip] = useState(0)

	const addItem = (item: MenuItem) => {
		const existItem = order.find(orderItem => orderItem.id === item.id)

		if (existItem) {
			const updatedOrder = order.map(orderItem =>
				orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
			)

			setOrder(updatedOrder)
		} else {
			const newItem = { ...item, quantity: 1 }
			setOrder([...order, newItem])
		}
	}

	const deleteItem = (id: MenuItem['id']) => {
		const updatedOrder = order.filter(item => item.id !== id)

		setOrder(updatedOrder)
	}

	const placeOrder = () => {
		setOrder([])
		setTip(0)
	}

	return {
		order,
		tip,
		setTip,
		addItem,
		deleteItem,
		placeOrder
	}
}

export default useOrder
