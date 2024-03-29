import Head from 'next/head';
import Link from 'next/link';

import { AuthLayout } from '@/components/AuthLayout';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <Logo className="w-auto h-10 mb-2" />
          </Link>
          <h2 className="mt-16 text-lg font-semibold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-10">
          <div className="mt-6">
            <form action="#" method="POST" className="space-y-7">
              <Input label="Email address" id="email" name="email" type="email" autoComplete="email" required />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-full shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Sign in <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
