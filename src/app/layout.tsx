import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/client';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instituto Central Coahuila',
  description: 'El Instituto promueve que todos los miembros de la comunidad educativa formada por alumnos, padres de familia y el cuerpo docente y directivo viva y refleje los siguientes valores, actitudes y habilidades en la vida diaria escolar que se desprenden de la visión y misión establecidas.',
  icons: [
    { 
      'href': '/favicon.ico',
      'url': '/favicon.ico',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='overflow-y-scroll'>
      <body className={cn('text-slate-900', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
