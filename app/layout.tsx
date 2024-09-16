import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>ChatGPT-like App</title>
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
