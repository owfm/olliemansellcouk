import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const berkeley = localFont({
    src: "../fonts/BerkeleyMono-Bold-UltraCondensed.otf",
    variable: "--font-berkeley-mono",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ollie Mansell - Personal Website",
    description: "Precious metals trading and technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="" lang="en">
            <body className={`${geistSans.variable} ${berkeley.variable} antialiased bg-accent`}>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-stretch min-h-screen bg-background my-4 pt-4 pl-4 pr-4 pb-1 shadow border border-foreground">
                        <h1 className="center">Under construction...</h1>
                        {/* <Header />
                        <div className="prose dark:prose-invert prose-slate prose-sm w-full py-4">{children}</div>
                        <Footer /> */}
                    </div>
                </div>
            </body>
        </html>
    );
}
