import { ITodo } from '../../App'
import TodoItem from './todo-item/todo-item'
import React, { ChangeEvent, memo } from 'react'

interface ITodoList {
	todos: ITodo
	doneTodo: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TodoList = memo(({ todos, doneTodo }: ITodoList) => {
	const onClick = () => {}
	if (Object.keys(todos).length === 0)
		return (
			<ul data-testid='todo-list' style={{ marginBottom: '100px' }}>
				Список дел пуст
			</ul>
		)
	return (
		<ul style={{ marginBottom: '100px' }} data-testid='todo-list'>
			{Object.entries(todos).map(([value, completed], index) => (
				<TodoItem
					key={`${index}`}
					checked={completed}
					doneTodo={doneTodo}
					onClick={onClick}
				>
					{value}
				</TodoItem>
			))}
		</ul>
	)
})
