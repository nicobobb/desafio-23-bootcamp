import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Desafio 23 - Nicolas Bobb",
    description: "Educacion IT",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-orange-50">{children}</body>
        </html>
    );
}
