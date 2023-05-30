import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ITodos } from '../types/Types'
import List from './List'
import TodoItem from './TodoItem'

const TodosPage: FC = () =>{
    const [todos, setTodos] = useState<ITodos[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try{
      const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const data = await response.data
      setTodos(data)
    } catch(e) {
      alert(e)
    }
  }
  return (
    <div>
        <List items={todos} renderItem={(todo: ITodos) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  )
}

export default TodosPage