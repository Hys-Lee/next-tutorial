import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:url"
          content="https://next-tutorial-bay-one.vercel.app/"
        />
        <meta property="og:title" content="넥스트 튜토리얼" />
        <meta property="og:description" content="설명설명" />
        <meta property="og:type" content="website" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
