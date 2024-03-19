import type { Metadata } from "next";
import { type_second } from "../functions/font";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={type_second.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
