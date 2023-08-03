import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { clsx } from "clsx";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import Providers from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "TaskManager",
  description:
    "You can choose between login or if you dont have account just click view demo and login as admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(roboto.variable)}>
        <Providers>
          {children}
          <ReactQueryDevtools />
          <ThemeSwitcher isHidden />
        </Providers>
      </body>
    </html>
  );
}
