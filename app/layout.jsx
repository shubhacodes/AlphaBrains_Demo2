import { Outfit, Markazi_Text } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });
const markazi = Markazi_Text({ 
  subsets: ['latin'],
  variable: '--font-markazi',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: {
    default: 'AlphaBrains',
    template: '%s | AlphaBrains',
  },
  description: 'Coaching for your brain',
  icons: {
    icon: [
      { url: '/apple-touch-icon.png', sizes: '56x56' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={markazi.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${outfit.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}