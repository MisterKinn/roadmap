import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "RoadMap Project Download",
    description: "Download your project that you've written in former class",
    icons: {
        icon: "img/roadmap.png",
    },
    other: {
        url: "img/roadmap-banner.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
