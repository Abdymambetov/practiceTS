import React, { FC, useState } from 'react'
import { ITodos } from '../types/Types'

interface TodoItemProps {
    todo: ITodos
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
 return (
    <div>
        <input type="checkbox" checked={todo?.completed} />
        {todo?.id}. {todo?.title}
    </div>
 )
}

export default TodoItem