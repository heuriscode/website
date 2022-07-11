import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import net from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';
import logoLaravel from '@/images/logos/laravel.svg';
import logoMirage from '@/images/logos/mirage.svg';
import logoStatamic from '@/images/logos/statamic.svg';
import logoStaticKit from '@/images/logos/statickit.svg';
import logoTuple from '@/images/logos/tuple.svg';
import avaLogo from '@/images/logos/AVALogoGreenHorizontal.png';

export function Hero() {
  const bgdAnimated = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        net({
          THREE: THREE,
          el: bgdAnimated.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x59852c,
          backgroundColor: 0xe3e3e3,
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
    <Container className="relative pt-20 pb-16 text-center lg:pt-32">
      <div id="animated-bgd" ref={bgdAnimated} className="absolute left-0 right-0 -bottom-24 -top-24"></div>
      <h1 className="relative max-w-4xl mx-auto text-5xl font-medium tracking-tight z-1 font-display text-primary sm:text-7xl">
        <span>Embracing </span>
        <span className="font-handwritten text-primary-500">Complexity</span>
      </h1>
      <p className="relative max-w-2xl mx-auto mt-6 text-lg tracking-tight z-1 text-slate-700">
        Economic analysis and Tech-driven innovation
      </p>
      <div className="relative flex justify-center mt-10 space-x-6 z-1">
        <ButtonLink href="/contact">Contact us today</ButtonLink>
        <ButtonLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline">
          <svg aria-hidden="true" className="flex-none w-3 h-3 fill-charcoal-600 group-active:fill-current">
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </ButtonLink>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="text-base font-display text-slate-900">Trusted by these six companies so far</p>
        <ul className="flex items-center justify-center mt-8 space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
          <li>
            <ul className="grid gap-4 grid-col-2 sm:grid-cols-3 sm:gap-8">
              <li className="flex items-center justify-center w-full">
                <div className="h-auto w-[120px]">
                  <Image src={avaLogo} alt="Ava" layout="responsive" unoptimized />
                </div>
              </li>
              <li className="flex items-center justify-center w-full">
                <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />
              </li>
              <li className="flex items-center justify-center w-full">
                <Image src={logoStaticKit} alt="StaticKit" layout="fixed" unoptimized />
              </li>
            </ul>
          </li>
          <li>
            <ul className="grid gap-4 grid-col-2 sm:grid-cols-3 sm:gap-8">
              <li className="flex items-center justify-center w-full">
                <Image src={logoMirage} alt="Mirage" layout="fixed" unoptimized />
              </li>
              <li className="flex items-center justify-center w-full">
                <Image src={logoLaravel} alt="Laravel" layout="fixed" unoptimized />
              </li>
              <li className="flex items-center justify-center w-full">
                <Image src={logoStatamic} alt="Statamic" layout="fixed" unoptimized />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
}
