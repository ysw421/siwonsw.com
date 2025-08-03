import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { ToggleThemeRound } from '@/components/ToggleTheme';
import { MDXProviderWrapper } from '@/components/mdx-provider'
import 'katex/dist/katex.min.css'
import "@/app/styles/globals.scss";


export const metadata: Metadata = {
  title: "Siwon's Webpage",
  description: "Welcome to Siwon's personal webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-primary antialiased`}
      >
        <header id='top-nav-bar' className='sticky top-0 left-0 z-50 h-[64px] w-full select-none px-5 backdrop-blur-[2px]'>
          <div className='flex h-full w-full'>
            <span className='text-2xl'>Siwon</span>
          </div>
        </header>
        <ThemeProvider>
          <MDXProviderWrapper>
            <main className="flex flex-col justify-items-center max-w-4xl mx-auto px-4 pb-8">{children}</main>
          <ToggleThemeRound />
          </MDXProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
