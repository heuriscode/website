import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import { AuthLayout } from '@/components/AuthLayout';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Textarea } from '@/components/Textarea';
import { useSendEmail } from '@/hooks/useSendEmail';
import { getError } from '@/utils/getError';
import { LoadingIcon } from '@/components/LoadingIcon';
import { useTimeoutFn } from '@/hooks/useTimeoutFn';

export const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialMessage = { error: true, message: '' };
const RESET_TIME = 8000;

export default function Login() {
  const [formState, setFormState] = useState(initialFormState);
  const [message, setMessage] = useState(initialMessage);
  const { mutateAsync, isError, isSuccess, data, error, isLoading } = useSendEmail();
  const [, , resetFormMessage] = useTimeoutFn(() => setMessage(initialMessage), RESET_TIME);

  useEffect(() => {
    if (isSuccess && data.success) {
      setMessage({ error: false, message: data.data });
    }
    if (isError) {
      setMessage({ error: isError, message: getError(error) });
    }
  }, [isError, isSuccess, data, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(formState => ({ ...formState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    await mutateAsync(formState);
    resetFormMessage();
  };

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
            <form action="#" method="" className="space-y-7" onSubmit={handleSubmit}>
              <Input
                label="Name"
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                autoComplete="given-name"
                required
              />
              <Input
                label="Email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                value={formState.email}
              />
              <Input
                label="Subject"
                onChange={handleChange}
                value={formState.subject}
                id="subject"
                name="subject"
                type="text"
                required
              />
              <Textarea
                label="Message"
                onChange={handleChange}
                value={formState.message}
                id="message"
                name="message"
                type="message"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-center text-white border border-transparent rounded-full shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {isLoading ? (
                    <LoadingIcon />
                  ) : (
                    <>
                      Submit <span aria-hidden="true">&rarr;</span>
                    </>
                  )}
                </button>
              </div>
              {message.message && (
                <p
                  className={clsx(
                    { 'text-red-600': message.error },
                    { 'text-primary-600': !message.error },
                    'my-4 text-sm'
                  )}
                >
                  {message.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
