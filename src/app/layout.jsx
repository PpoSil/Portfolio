import StyledComponentsRegistry from 'src/lib/registry.jsx';

// eslint-disable-next-line camelcase
import { Fira_Code, Open_Sans, Noto_Sans_KR } from 'next/font/google';

const fontEnglishHl = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

const fontEnglishFl = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const fontKorean = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="kr"
      className={`${fontEnglishHl.variable} ${fontEnglishFl.variable} ${fontKorean.variable}`}
    >
      <body>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
