import Navbar from "./components/Utilities/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farhan Kebab",
  description: "Kebab Murah Meriah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
       <Navbar />
        {children}</body>
    </html>
  );
}
