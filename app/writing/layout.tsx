import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Thoughts on design, development, and creative processes.',
  title: 'thoughts',
};

export default function thoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col py-16">
      {children}
    </div>
  );
} 