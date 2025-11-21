import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TruNort",
  description: "Newcomer app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Oswald font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* bg-snow should already test your custom color */}
      <body className="bg-white">{children}</body>
    </html>
  );
}
