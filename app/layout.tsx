// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NREMT Practice Test + NREMT Prep Simulator | NREMTS",
    template: "%s | NREMT",
  },
  description:
    "NREMT practice test + CAT-style simulator. Get an instant readiness score, detailed rationales, and a focused NREMT prep study plan for EMT & Paramedic.",
  keywords: [
    "nremt practice test",
    "nremt prep",
    "nremt test prep",
    "emt practice test",
    "paramedic practice test",
    "nremt simulator",
    "nremt study guide",
    "nremt exam practice",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  applicationName: "NREMT",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NREMT",
  },
  openGraph: {
    title: "NREMT Practice Test + CAT-Style Simulator (Free Diagnostic)",
    description:
      "Take a free NREMT practice test diagnostic in ~60 seconds. Get your readiness score + weakest domains instantly.",
    type: "website",
    siteName: "NREMTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "NREMT Practice Test (Free) — Will the Computer Stop?",
    description: "Free diagnostic → readiness score + weakness plan. EMT & Paramedic modes.",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17883612588"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17883612588');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v2xt1zqmjt");
          `}
        </Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
