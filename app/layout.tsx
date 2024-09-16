import React, { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
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
