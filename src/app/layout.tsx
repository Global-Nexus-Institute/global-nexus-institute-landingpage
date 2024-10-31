import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/lib/store/storeProvider";
import { AntdStyledComponentsProvider } from "@/providers/AntdStyledComponentsProvider/AntdStyledComponentProvider";
import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import TopMenu from "@/components/navigation/TopMenu";
import { paypalClient } from "@/shared/constants";
import { RouteLoader } from "@/components/route-loader/RouteLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Global Nexus Institute — Innovation & excellence",
  description:
    "Global Nexus Institute provide you with valuable knowledge and skills directly from those shaping the future of data science, AI, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <StoreProvider>
          <AntdStyledComponentsProvider>
            <div className="w-full fixed  z-50">
              <TopMenu />
            </div>
            <RouteLoader />
            {children}
            <Footer />
            <Copyright />
          </AntdStyledComponentsProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
