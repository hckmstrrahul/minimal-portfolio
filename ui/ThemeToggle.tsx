'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="rounded-full bg-gray-200 dark:bg-gray-700" 
        style={{ 
          width: '18px', 
          height: '18px', 
          border: '1px solid rgba(156, 163, 175, 0.2)' 
        }}
      ></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ 
        width: '18px', 
        height: '18px', 
        border: '1px solid rgba(156, 163, 175, 0.5)' 
      }}
    ></button>
  );
} 