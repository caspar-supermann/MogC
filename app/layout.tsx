import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marita & Caspar – 4. september 2027",
  description:
    "Marita og Caspar gifter seg lørdag 4. september 2027 på Kokkeplassen i Arendal. Her finner du program, praktisk informasjon og svarskjema.",
  openGraph: {
    title: "Marita & Caspar – 4. september 2027",
    description: "Vi gifter oss på Kokkeplassen i Arendal. Velkommen!",
    images: ["/images/monogram.png"],
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#5B5726",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
