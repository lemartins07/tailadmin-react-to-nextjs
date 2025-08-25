import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'TailAdmin Next.js',
  description: 'TailAdmin dashboard converted from React to Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
