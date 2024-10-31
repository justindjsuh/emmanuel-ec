import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Emmanuel English Congregation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                    as="style"
                    crossOrigin="anonymous"
                />
            </Head>
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
