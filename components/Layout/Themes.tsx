import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Themes() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <button onClick={() => setTheme('light')} className="">
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </>
  );
}
