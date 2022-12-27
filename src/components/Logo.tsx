import clsx from 'clsx';
import Image from "next/image";

export function Logo({ className }) {
  return (
    <Image
      className={clsx(className)}
      width={50}
      height={50}
      src="/heuris-logo.svg"
      alt="Heuris Logo" />
  );
}
