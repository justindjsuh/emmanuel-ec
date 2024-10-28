import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

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
                <title>Emmanuel English Congregation</title>
            </Head>
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
