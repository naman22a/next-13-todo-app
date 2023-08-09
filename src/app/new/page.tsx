import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

async function createTodo(data: FormData) {
    'use server';
    const name = data.get('name')?.valueOf();

    if (typeof name !== 'string' || name.length === 0) {
        throw new Error('Invalid title');
    }

    await prisma.todo.create({ data: { name, completed: false } });
    redirect('/');
}

export default function CreateNewTodo() {
    return (
        <div>
            <header className="flex justify-between items-center py-7 px-5 md:px-10 lg:px-20 shadow-lg">
                <h1 className="text-3xl font-semibold capitalize">
                    create todo
                </h1>
            </header>
            <div className="flex flex-col items-center justify-center py-10 px-3 md:p-5 lg:p-10">
                <form
                    action={createTodo}
                    className="flex gap-2 flex-col w-full md:w-1/2 lg:w-1/4"
                >
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="font-semibold text-lg mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-accent"
                            placeholder="Enter the todo title"
                            autoComplete="off"
                        />
                    </div>
                    <div className="btn-group mt-3">
                        <Link href=".." className="btn btn-primary">
                            cancel
                        </Link>
                        <button className="btn btn-accent" type="submit">
                            create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
