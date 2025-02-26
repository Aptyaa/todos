import { memo } from 'react'

interface IListBar {
	count: number
	onClick: () => void
	filterClick: (e: React.MouseEvent<HTMLDivElement>) => void
	selected: string
}

export const TodoBar = memo(
	({ count, onClick, filterClick, selected }: IListBar) => {
		return (
			<div
				style={{ display: 'flex', justifyContent: 'space-between' }}
				data-testid='todo-bar'
			>
				<span data-testid='todo-count'>{count} items left</span>
				<div onClick={filterClick}>
					<span
						data-name='all'
						style={{
							border: selected === 'all' ? '1px solid gray' : 'none',
							marginRight: '20px',
							padding: '3px',
						}}
					>
						All
					</span>
					<span
						data-name='active'
						style={{
							border: selected === 'active' ? '1px solid gray' : 'none',
							marginRight: '20px',
							padding: '3px',
						}}
					>
						Active
					</span>
					<span
						data-name='completed'
						style={{
							border: selected === 'completed' ? '1px solid gray' : 'none',
							padding: '3px',
						}}
					>
						Completed
					</span>
				</div>
				<button data-testid='clear-btn' onClick={onClick}>
					Clear completed
				</button>
			</div>
		)
	}
)
