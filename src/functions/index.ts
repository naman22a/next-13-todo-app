'use server';
import { redirect } from 'next/navigation';
import { prisma } from '../lib/prisma';

export async function toggleTodo(id: number, completed: boolean) {
    await prisma.todo.update({ where: { id }, data: { completed } });
}

export async function deleteTodo(id: number) {
    await prisma.todo.delete({ where: { id } });
    redirect('/');
}
