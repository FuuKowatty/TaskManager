import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { clsx } from "clsx";
import { Golos_Text, Roboto } from "next/font/google";
import "./globals.css";

import { DarkModeSwitcher } from "@/components/DarkModeSwitcher";

import Providers from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});
const golosText = Golos_Text({
  subsets: ["latin"],
  variable: "--font-golos-text",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(roboto.variable, golosText.variable)}>
        <Providers>
          <div className="hidden md:block">
            <DarkModeSwitcher />
          </div>
          {children}
          <ReactQueryDevtools />
        </Providers>
      </body>
    </html>
  );
}
