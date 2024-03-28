import { tipOptions } from '../constants'

type TipPercentageProps = {
	setTip: React.Dispatch<React.SetStateAction<number>>
	tip: number
}

function TipPercentage({ tip, setTip }: TipPercentageProps) {
	return (
		<div>
			<h3 className='font-black text-2xl text-orange-500'>Tip:</h3>

			<form>
				{tipOptions.map(tipOption => (
					<div key={tipOption.id} className='flex gap-2'>
						<label htmlFor={tipOption.id} className='font-bold'>
							{tipOption.label}
						</label>
						<input
							id={tipOption.id}
							type='radio'
							name='tipOption'
							value={tipOption.value}
							onChange={e => setTip(+e.target.value)}
							checked={tipOption.value === tip}
						/>
					</div>
				))}
			</form>
		</div>
	)
}

export default TipPercentage
