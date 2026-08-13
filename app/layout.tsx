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

export const metadata: Metadata = {
  title: "Thevindu Fernando | CSE Undergraduate & Full-Stack Developer",
  description:
    "Portfolio of Thevindu Fernando — 3rd-year Computer Science and Engineering undergraduate at the University of Moratuwa. Specializing in full-stack architecture, compiler implementation, and applied machine learning.",
  keywords: [
    "Thevindu Fernando",
    "University of Moratuwa",
    "Computer Science",
    "Full-Stack Developer",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Thevindu Fernando" }],
  openGraph: {
    title: "Thevindu Fernando | Developer Portfolio",
    description:
      "Building intelligent systems and scalable full-stack applications.",
    type: "website",
    locale: "en_US",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thevindu Fernando",
  url: "https://thevindufernando.com",
  jobTitle: "Computer Science and Engineering Undergraduate",
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
