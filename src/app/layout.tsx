import type { Metadata } from "next";
import { metaDataHome } from "./meta";
import "./styles/animations.css";
import "./styles/globals.css";

export const metadata: Metadata = metaDataHome

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
