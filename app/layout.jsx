import "./globals.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "The Box",
  description: "Building things is our mission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased font-sans mx-4 md:mx-8 lg:mx-16 xl:mx-44`}
      >
        {children}
      </body>
    </html>
  );
}
