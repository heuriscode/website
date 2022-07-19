import Head from 'next/head';
import Link from 'next/link';

import { AuthLayout } from '@/components/AuthLayout';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Textarea } from '@/components/Textarea';

export default function Login() {
  return (
    <>
      <Head>
        <title>Contact - Heuris</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <a>
              <Logo className="w-auto h-10 mb-2" />
            </a>
          </Link>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">Contact us</h2>
          <p className="mt-2 text-sm text-gray-700">Find out what make Heuris so different from other companies.</p>
        </div>
        <div className="mt-6">
          <div className="mt-6">
            <form action="#" method="" className="space-y-7">
              <Input
                label="First name"
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
              />
              <Input label="Email address" id="email" name="email" type="email" autoComplete="email" required />
              <Input label="Subject" id="subject" name="subject" type="text" required />
              <Textarea label="Message" id="message" name="message" type="message" required />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-full shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Submit <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
