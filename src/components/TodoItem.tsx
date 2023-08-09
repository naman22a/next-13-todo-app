'use client';
import React from 'react';
import dayjs from 'dayjs';
import { Todo } from '@prisma/client';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTodo, toggleTodo } from '@/functions';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface Props extends Todo {}

const TodoItem: React.FC<Props> = (todo) => {
    const { id, name, completed, createdAt, updatedAt: _ } = todo;

    return (
        <li key={id} className="flex flex-col mb-4">
            <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                <input
                    id={id.toString()}
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                    className="cursor-pointer peer mx-2 checkbox checkbox-accent"
                />
                <span className="text-xl peer-checked:line-through peer-checked:text-gray-700">
                    {name}
                </span>
                <div className="ml-auto">
                    <button
                        className="btn btn-error text-white"
                        onClick={() => deleteTodo(id)}
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
            <span className="text-sm ml-5 mt-2">
                {dayjs(createdAt).fromNow()}
            </span>
        </li>
    );
};

export default TodoItem;
