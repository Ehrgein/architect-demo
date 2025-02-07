import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./helpers/SmoothScrolling";
import Footer from "./components/Layout/Footer";
import NavProject from "./components/Layout/NavProject";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className} lang="en"`}>
      <body className={`antialiased bg-[#E5DCD8]`}>
        <SmoothScrolling>
          <NavProject />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
