import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderComp from "./base/components/headerComp/headerComp";
import FooterComp from "./base/components/footerComp/footerComp";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Emmanuel EC",
//     description: "Welcome to Emmanuel EC!",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
