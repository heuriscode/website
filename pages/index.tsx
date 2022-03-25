import Head from 'next/head';
// import Image from 'next/image';
import { LinkButton } from '@/components/Link';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container px-4 sm:px-0">
      <img className="z-0 mx-auto sm:h-screen" src="/heuris-logo-vector.svg" alt="heuris logo" />
      <p className="py-4 sm:hidden">Learn more about us</p>
      <div className="flex flex-col gap-2 sm:hidden">
        <LinkButton
          href="/heuris"
          className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Heuris
        </LinkButton>
        <LinkButton
          href="/heuristechs"
          type="button"
          className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Heuristechs
        </LinkButton>
      </div>
    </div>
  );
}
