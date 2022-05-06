import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
export default function Themes() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <FiMoon size={20} />
        </button>
      ) : (
        <button onClick={() => setTheme('light')} className="">
          <FiSun size={20} />
        </button>
      )}
    </>
  );
}
