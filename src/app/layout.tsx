import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { images } from "@/constants";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const background = {
  backgroundImage: images.backgroundImage,
  dark: {
    background: "bg-gradient-to-b from-zinc-950 to-zinc-900",
  },
  light: {
    background: "#dedef6",
  },
};

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Yusuf Alperen Dumlu - Frontend Developer",
  },
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
    other: {
      rel: "icon",
      url: "/favicon.jpg",
    },
  },

  openGraph: {
    title: "Yusuf Alperen Dumlu - Frontend Developer",
    description: "Frontend Developer Portfolio",

    images: [
      {
        url: "https://w7.pngwing.com/pngs/413/779/png-transparent-black-person-symbol-art-computer-icons-user-profile-avatar-profile-heroes-profile-user-interface-thumbnail.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${background.dark.background} antialiased flex items-center justify-center w-full h-full overflow-x-hidden`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
