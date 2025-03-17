import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/orgnisms/Header";
import FotterSectio from "@/components/orgnisms/FotterSectio";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Usama - Front-End Developer & Problem Solver",
  description: "Passionate Front-End Developer skilled in React.js, Next.js, and JavaScript, creating responsive and user-friendly web applications.",
  icons: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <FotterSectio />
        </body>
    </html>
  );
}
