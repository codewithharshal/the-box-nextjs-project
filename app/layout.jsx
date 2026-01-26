import "./globals.css";

export const metadata = {
  title: "The Box",
  description: "Buidling things is our mission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
