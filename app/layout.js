import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";
import Navbar from "./component/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next auth",
  description: "next js authorisation app test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
        <Navbar/>
          {children}
          </body>
      </SessionWrapper>
    </html>
  );
}
