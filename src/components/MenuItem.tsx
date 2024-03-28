import type { MenuItem } from '../types'

type MenuItemProps = {
	item: MenuItem
	addItem: (item: MenuItem) => void
}

function MenuItem({ item, addItem }: MenuItemProps) {
	const { name, price } = item

	return (
		<button className={classes.button} onClick={() => addItem(item)}>
			<p>{name}</p>
			<p className='font-black'>{price}</p>
		</button>
	)
}

export default MenuItem

const classes = {
	button:
		'border-2 border-blue-300 rounded-md hover:bg-blue-400 ease-in-out duration-300 w-full p-3 flex justify-between'
}
