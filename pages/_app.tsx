import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import SeoHeader from '@/components/SEO/HeadingConfig';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SeoHeader />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
