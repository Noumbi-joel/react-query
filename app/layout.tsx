"use client"

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClientProvider, QueryClient } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <nav>
            <ul className="flex bg-blue-50 p-4 justify-evenly">
              <li className="border-b-2">
                <Link href="/">Home</Link>
              </li>
              <li className="border-b-2">
                <Link href="/superheroes">Traditional Super Heroes</Link>
              </li>
              <li className="border-b-2">
                <Link href="/rqsuperheroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
