import "./globals.css";
import type { ReactNode } from "react";
import { Oswald } from "next/font/google";

export const metadata = {
  title: "TruNort",
  description: "Newcomer app",
};

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
