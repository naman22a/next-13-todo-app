import React from 'react';
import { Todo } from '@prisma/client';
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
