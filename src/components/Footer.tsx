import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { GithubIcon } from './icons/GithubIcon';

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex items-center justify-between py-16">
          <Logo className="w-auto h-10 mx-auto" />
          <nav className="text-sm" aria-label="quick links">
            <ul className="flex justify-center -my-1 space-x-6">
              <li>
                <Link
                  href="/#about"
                  className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center py-10 border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between">
          <div className="flex space-x-6">
            <Link href="https://github.com/heuriscode" target="_blank" className="group">
              <span className="sr-only">Heuris on GitHub</span>
              <GithubIcon className="w-6 h-6 fill-slate-500 group-hover:fill-slate-700" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Heuris. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
