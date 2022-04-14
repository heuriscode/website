import { LinkComponent } from '@/components/Link';
import { useRouter } from 'next/router';
import Themes from './Themes';
import Image from 'next/image';

// const navigation = [{ name: 'Home', href: '/' }];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="container dark:text-stone-200">
      <div className="flex items-center justify-between py-6">
        <LinkComponent href="/">
          {/* TODO: create svg without text */}
          {/* Home */}
          <Image src="/heuris-logo-vector.svg" height={180} width={180} />
        </LinkComponent>
        <Themes />
        {router.pathname === '/heuris' && <LinkComponent href="/heuristechs">Heuristechs</LinkComponent>}
        {router.pathname === '/heuristechs' && <LinkComponent href="/heuris">Heuris</LinkComponent>}
      </div>
    </nav>
  );
}
