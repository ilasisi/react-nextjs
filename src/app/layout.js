import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/Providers";

const lato = Lato({
    variable: "--font-lato",
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Welcome to NextJS App",
    description: "Welcome to NextJS App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${lato.style} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
