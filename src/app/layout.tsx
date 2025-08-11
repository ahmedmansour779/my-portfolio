import type { Metadata } from "next";
import { metaDataHome } from "./meta";
import "./styles/animations.css";
import "./styles/globals.css";

export const metadata: Metadata = metaDataHome

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Quintessential&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
