import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import TodoList from '@/components/TodoList';

export default async function Home() {
    const todos = await prisma.todo.findMany();
    return (
        <div>
            <header className="flex justify-between items-center py-7 px-5 md:px-10 lg:px-20 shadow-lg">
                <h1 className="text-3xl font-semibold">Todo List</h1>
                <button className="btn btn-accent">
                    <Link href="/new">create todo</Link>
                </button>
            </header>
            <div className="p-10">
                <TodoList todos={todos} />
            </div>
        </div>
    );
}
