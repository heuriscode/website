import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline: 'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    charcoal:
      'bg-charcoal-700 text-white hover:bg-charcoal-900 active:bg-charcoal-800 active:text-charcoal-300 focus-visible:outline-charcoal-900',
    primary:
      'bg-primary text-white hover:bg-primary hover:bg-primary-600 active:bg-primary active:text-primary focus-visible:outline-primary',
    white:
      'bg-white text-charcoal-900 hover:bg-primary-50 active:bg-primary-200 active:text-charcoal-600 focus-visible:outline-white',
  },
  outline: {
    charcoal:
      'ring-charcoal-200 text-charcoal-700 hover:text-charcoal-900 hover:ring-charcoal-300 hover:bg-gray-50 active:bg-charcoal-100 active:text-charcoal-600 focus-visible:outline-charcoal-600 focus-visible:ring-charcoal-300',
    white:
      'ring-charcoal-700 text-white hover:ring-charcoal-500 active:ring-charcoal-700 active:text-charcoal-400 focus-visible:outline-white',
  },
};

export function Button({ variant = 'solid', color = 'charcoal', className = '', ...props }) {
  return <button className={clsx(baseStyles[variant], variantStyles[variant][color], className)} {...props} />;
}

export function ButtonLink({ variant = 'solid', color = 'charcoal', href, className = '', ...props }) {
  return (
    <Link href={href}>
      <a className={clsx(baseStyles[variant], variantStyles[variant][color], className)} {...props} />
    </Link>
  );
}
