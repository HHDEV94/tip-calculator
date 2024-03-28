import MenuItem from './components/MenuItem'
import useOrder from './hooks/useOrder'
import { menuItems } from './data/db'
import OrderContents from './components/OrderContents'
import OrderTotal from './components/OrderTotal'
import TipPercentage from './components/TipPercentage'

function App() {
	const { order, tip, setTip, addItem, deleteItem, placeOrder } = useOrder()

	return (
		<>
			<header className={'bg-blue-400 py-5'}>
				<h1 className='text-white text-center text-4xl font-black'>Tip & Consumption Calculator</h1>
			</header>

			<main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
				<div className='p-5'>
					<h2 className='text-center text-4xl text-blue-400 font-black'>Menu</h2>
					<div className='space-y-2 my-10'>
						{menuItems.map(item => (
							<MenuItem key={item.id} item={item} addItem={addItem} />
						))}
					</div>
				</div>
				<div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10 flex justify-between flex-col'>
					<OrderContents order={order} deleteItem={deleteItem} />
					<div className='flex flex-col gap-5'>
						<TipPercentage tip={tip} setTip={setTip} />
						<OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
					</div>
				</div>
			</main>
		</>
	)
}

export default App
