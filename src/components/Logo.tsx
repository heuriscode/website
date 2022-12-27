import clsx from 'clsx';
import Image from "next/legacy/image";

export function Logo({ className }) {
  return (
    <Image className={clsx(className)} layout="fixed" width={50} height={50} src="/heuris-logo.svg" alt="Heuris Logo" />
  );
}
