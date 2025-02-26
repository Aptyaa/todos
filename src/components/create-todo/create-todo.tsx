import { memo } from 'react'

interface ICreateTodo {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick: () => void
}
const CreateTodo = ({ value, onChange, onClick }: ICreateTodo) => {
	return (
		<div style={{ marginBottom: '30px' }}>
			<input
				style={{ width: '100%' }}
				type='text'
				onChange={onChange}
				value={value}
				placeholder='Введите задачу...'
				data-testid='todo-input'
			/>
			<button data-testid='todo-button' onClick={onClick}>
				Добавить задачу
			</button>
		</div>
	)
}

export default memo(CreateTodo)
