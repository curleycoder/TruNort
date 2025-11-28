import "./globals.css";
import type { ReactNode } from "react";
import { Oswald } from "next/font/google";

export const metadata = {
  title: "TruNort",
  description: "Newcomer support app",
  icons: {
    icon: "/favicon.png",
  },
};

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      </head>

      <body className={`${oswald.className} bg-white`}>{children}</body>
    </html>
  );
}
