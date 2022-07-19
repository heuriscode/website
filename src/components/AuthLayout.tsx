import { useEffect, useRef, useState } from 'react';
import net from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export function AuthLayout({ children }) {
  const bgdAnimated = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect && window?.innerWidth > 768) {
      setVantaEffect(
        net({
          THREE,
          el: bgdAnimated.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x84ac81,
          backgroundColor: 0x59852c,
          points: 20.0,
          maxDistance: 19.0,
          spacing: 14.0,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="relative flex justify-center min-h-full md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-col justify-center flex-1 px-4 py-12 bg-white shadow-2xl md:flex-none md:px-28">
          <div className="w-full max-w-md mx-auto sm:px-4 md:w-96 md:max-w-sm md:px-0">{children}</div>
        </div>
        <div className="absolute inset-0 flex-1 hidden w-full hero-bg sm:block lg:relative lg:w-0" ref={bgdAnimated}>
          {' '}
        </div>
      </div>
    </>
  );
}
