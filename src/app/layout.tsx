import '@/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Todo App',
    description: 'Todo app using Next 13 created by Naman Arora.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
