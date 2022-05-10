import Themes from './Themes';
import { footerNavigation } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-500 hover:text-green-800/80">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
          {/* <Themes /> */}
        </div>
        <p className="mt-8 text-base text-center text-gray-500">
          &copy; {new Date().getFullYear()} Heuris, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
