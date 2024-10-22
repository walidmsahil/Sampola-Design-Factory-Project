import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import "../globals.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '@/components/MyFooter';
import CookieConsentBanner from '../../components/CookieConsentBanner';
import ClientLayout from './ClientLayout';
import { ThemeProvider } from '../theme-provider'; // 导入 ThemeProvider
import { getNavData } from '../../lib/api';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Lato = localFont({
  src: "../fonts/Lato-Regular.ttf",
  variable: "--font-Lato-Regular",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sampola",
  description: "welcome to Sampola",
};

export default async function Layout({ children, params }) {
  const locale = params.locale || 'en';
  const messages = await getMessages(locale);
  const menuItems = await getNavData(locale);

  // 定义内联脚本，用于在页面加载前设置字体大小
  const setFontSizeScript = `
    (function() {
      try {
        var savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
          document.documentElement.style.setProperty('--font-size', savedFontSize);
        }
      } catch (e) {
        console.error('Error accessing localStorage', e);
      }
    })();
  `;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* 在<head>中插入内联脚本 */}
        <script dangerouslySetInnerHTML={{ __html: setFontSizeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground dark:bg-darkBackground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale} menuItems={menuItems} />
            <ClientLayout locale={locale}>
              <main>{children}</main>
            </ClientLayout>
            {/* <CookieConsentBanner /> */}
            <Footer className="text-center p-4 mt-8 border-t border-[#4a5c4d]" locale={locale} menuItems={menuItems}>
            </Footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
