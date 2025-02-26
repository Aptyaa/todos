import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import './App.css'
import CreateTodo from './components/create-todo/create-todo'
import { TodoList } from './components/todo-list/todo-list'
import { TodoBar } from './components/todo-bar/todo-bar'

export type ITodo = Record<string, boolean>

type Filter = 'all' | 'completed' | 'active'

function App() {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo>({})
	const [selected, setSelected] = useState<Filter>('all')

	const setFilter = useCallback((e: React.MouseEvent<HTMLElement>) => {
		const { dataset } = e.target as HTMLElement
		setSelected(dataset.name as Filter)
	}, [])

	const filteredTodos = useMemo(() => {
		return Object.entries(todos).reduce((acc, [value, completed]) => {
			if (selected === 'active') {
				return !completed ? { ...acc, [value]: completed } : acc
			}
			if (selected === 'completed') {
				return completed ? { ...acc, [value]: completed } : acc
			}
			return todos
		}, {})
	}, [todos, selected])

	const addTodo = () => {
		if (value.trim() === '') return
		setTodos({ ...todos, [value]: false })
		setValue('')
	}

	const doneTodo = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newTodos = { ...todos }
			newTodos[e.target.nextSibling?.textContent as string] = e.target.checked
			setTodos(newTodos)
		},
		[todos]
	)

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[]
	)
	const clearCompletedTodos = () => {
		const newTodos = { ...todos }
		for (let todo in newTodos) {
			if (newTodos[todo]) delete newTodos[todo]
		}
		setTodos(newTodos)
	}

	return (
		<div className='App' style={{ width: '600px' }}>
			<h1>Планировщик дел</h1>
			<CreateTodo value={value} onChange={onChange} onClick={addTodo} />
			<TodoList todos={filteredTodos} doneTodo={doneTodo} />
			<TodoBar
				count={Object.values(todos).filter(key => !key).length}
				onClick={clearCompletedTodos}
				filterClick={setFilter}
				selected={selected}
			/>
		</div>
	)
}

export default App
