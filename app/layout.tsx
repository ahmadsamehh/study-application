import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "التعلم في مصر | Study in Egypt | ZAD Edugate - بوابتك للدراسة في الجامعات المصرية",
  description:
    "التعلم في مصر مع ZAD Edugate - شركة رائدة في خدمات Study in Egypt للطلاب الوافدين. نقدم خدمات شاملة للدراسة في الجامعات المصرية المعتمدة مع ضمان القبول والمتابعة حتى التخرج.",
  keywords:
    "التعلم في مصر، study in egypt، الدراسة في مصر، الجامعات المصرية، طلاب وافدين، جامعة القاهرة، عين شمس، الجامعة الأمريكية، ZAD Edugate، تسجيل جامعات، توثيق شهادات، التعليم في مصر، egyptian universities، cairo university، study abroad egypt",
  authors: [{ name: "ZAD Edugate" }],
  creator: "ZAD Edugate - التعلم في مصر",
  publisher: "ZAD Edugate - Study in Egypt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://zadedugate.com",
    siteName: "ZAD Edugate - التعلم في مصر | Study in Egypt",
    title: "التعلم في مصر | Study in Egypt | ZAD Edugate - بوابتك للدراسة في الجامعات المصرية",
    description:
      "التعلم في مصر مع ZAD Edugate - شركة رائدة في خدمات Study in Egypt للطلاب الوافدين في الجامعات المصرية المعتمدة",
    images: [
      {
        url: "/study-egypt-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "التعلم في مصر - Study in Egypt - ZAD Edugate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "التعلم في مصر | Study in Egypt | ZAD Edugate",
    description: "التعلم في مصر مع ZAD Edugate - شركة رائدة في خدمات Study in Egypt للطلاب الوافدين",
    images: ["/study-egypt-banner.jpeg"],
  },
  alternates: {
    canonical: "https://zadedugate.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://zadedugate.com" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Egypt" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "ZAD Edugate - التعلم في مصر",
              alternateName: ["زاد إيدجيت", "Study in Egypt", "التعلم في مصر"],
              description:
                "شركة رائدة في التعلم في مصر وخدمات Study in Egypt للطلاب الوافدين في الجامعات المصرية المعتمدة",
              url: "https://zadedugate.com",
              logo: "https://zadedugate.com/zad-logo.jpeg",
              image: "https://zadedugate.com/study-egypt-banner.jpeg",
              telephone: "+201080360400",
              email: "zadedugatez@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressRegion: "Cairo",
                addressLocality: "القاهرة، جمهورية مصر العربية",
              },
              serviceArea: {
                "@type": "Country",
                name: "Egypt",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات التعلم في مصر - Study in Egypt Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "التعلم في مصر - التسجيل في الجامعات المصرية",
                      description:
                        "خدمات شاملة للتعلم في مصر ومساعدة الطلاب في التسجيل والقبول في الجامعات المصرية المعتمدة",
                      keywords: "التعلم في مصر، study in egypt، الجامعات المصرية",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Study in Egypt - توثيق الشهادات",
                      description: "خدمات توثيق الشهادات الدراسية للطلاب الراغبين في التعلم في مصر",
                      keywords: "study in egypt، التعلم في مصر، توثيق شهادات",
                    },
                  },
                ],
              },
              keywords: "التعلم في مصر، study in egypt، الدراسة في مصر، الجامعات المصرية، egyptian universities",
              sameAs: ["https://www.facebook.com/zadedugate", "https://www.instagram.com/zadedugate"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
