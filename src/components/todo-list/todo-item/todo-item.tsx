import React, { ChangeEvent, memo, MouseEvent } from 'react'

interface TodoItemProps {
	onClick: (e: MouseEvent<HTMLLIElement>) => void
	children: React.ReactNode
	doneTodo: (e: ChangeEvent<HTMLInputElement>) => void
	checked: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({
	onClick,
	children,
	doneTodo,
	checked,
}: TodoItemProps) => {
	return (
		<li
			style={{ listStyle: 'none', textAlign: 'left' }}
			onClick={onClick}
			data-testid='todo-item'
		>
			<label>
				<input onChange={doneTodo} checked={checked} type='checkbox' />
				{children}
			</label>
		</li>
	)
}

export default memo(TodoItem)
