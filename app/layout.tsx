import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://thevindufernando2003.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Thevindu Fernando | Software Engineering Undergraduate",
  description:
    "Portfolio of Thevindu Fernando, a Computer Science and Engineering undergraduate at the University of Moratuwa specializing in full-stack dev and machine learning.",
  keywords: [
    "Thevindu Fernando",
    "University of Moratuwa",
    "Computer Science",
    "Software Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Sri Lanka",
    "MERCon 2026",
    "Event Study",
    "Portfolio",
  ],
  authors: [{ name: "Thevindu Fernando", url: SITE_URL }],
  creator: "Thevindu Fernando",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Thevindu Fernando | Software Engineering Undergraduate",
    description:
      "Portfolio of Thevindu Fernando, a Computer Science and Engineering undergraduate at the University of Moratuwa specializing in full-stack dev and machine learning.",
    url: SITE_URL,
    siteName: "Thevindu Fernando",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thevindu Fernando | Software Engineering Undergraduate",
    description:
      "Portfolio of Thevindu Fernando, a Computer Science and Engineering undergraduate at the University of Moratuwa specializing in full-stack dev and machine learning.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thevindu Fernando",
  url: SITE_URL,
  jobTitle: "Computer Science and Engineering Undergraduate",
  description:
    "Portfolio of Thevindu Fernando, a Computer Science and Engineering undergraduate at the University of Moratuwa specializing in full-stack dev and machine learning.",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Moratuwa",
    },
    {
      "@type": "EducationalOrganization",
      name: "Ananda College",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Machine Learning",
    "Compiler Design",
    "Operating Systems",
    "React",
    "Flutter",
    "Next.js",
    "FastAPI",
    "C++",
    "C",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Pandas",
  ],
  sameAs: [
    "https://github.com/ThevinduFernando2003",
    "https://www.linkedin.com/in/thevindu-fernando-4a63b3283/",
    "https://medium.com/@thevindufernando0315",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
