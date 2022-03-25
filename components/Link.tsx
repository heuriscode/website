import Link from 'next/link';

export function LinkComponent({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <a {...props}>{props.children}</a>
    </Link>
  );
}

export function LinkButton({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <button {...props}>{props.children}</button>
    </Link>
  );
}
