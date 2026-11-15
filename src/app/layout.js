import { Instrument_Serif, Onest } from "next/font/google";
import "./globals.css";
import "./ui.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Grainient from "@/components/Grainient/Grainient";
import CursorHalo from "@/components/CursorHalo";
import data from "@/data/portfolio.json";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Muhammad Rumman Aslam — ML Engineer & Researcher",
    template: "%s — Muhammad Rumman Aslam",
  },
  description:
    "Portfolio of Muhammad Rumman Aslam, a machine learning engineer working on trustworthy multimodal systems for healthcare, clinical AI auditing and robustness under missing data.",
  applicationName: "Muhammad Rumman Aslam — Portfolio",
  authors: [{ name: "Muhammad Rumman Aslam" }],
  creator: "Muhammad Rumman Aslam",
  keywords: [
    "Muhammad Rumman Aslam",
    "machine learning engineer",
    "medical AI",
    "multimodal learning",
    "clinical AI auditing",
    "model robustness",
    "calibration",
    "missing modalities",
  ],
  robots: { index: true, follow: true },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "profile",
    locale: "en_US",
    siteName: "Muhammad Rumman Aslam",
    title: "Muhammad Rumman Aslam — ML Engineer & Researcher",
    description:
      "Trustworthy multimodal systems for healthcare: clinical AI auditing, robustness under missing data, and reproducible ML engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rumman Aslam — ML Engineer & Researcher",
    description:
      "Trustworthy multimodal systems for healthcare: clinical AI auditing, robustness under missing data, and reproducible ML engineering.",
  },
};

export const viewport = {
  themeColor: "#0b1620",
  colorScheme: "dark",
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${data.personal.name} — selected work`,
  itemListElement: data.projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      codeRepository: project.links?.github,
      programmingLanguage: project.tags?.[0],
      author: { "@type": "Person", name: data.personal.name },
    },
  })),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.personal.name,
  jobTitle: data.personal.title,
  email: `mailto:${data.personal.email}`,
  description: data.personal.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: data.education.institution,
  },
  knowsAbout: data.personal.focus,
  sameAs: [
    data.personal.social.github,
    data.personal.social.linkedin,
    data.personal.social.medium,
    data.personal.social.leetcode,
  ].filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrument.variable} ${onest.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
        <div className="site-canvas" aria-hidden="true">
          <Grainient
            color1="#2b78c0"
            color2="#071024"
            color3="#5a8fcf"
            timeSpeed={0.24}
            colorBalance={-0.05}
            warpStrength={1}
            warpFrequency={2.7}
            warpSpeed={0.5}
            warpAmplitude={58}
            blendAngle={0}
            blendSoftness={0.22}
            rotationAmount={300}
            noiseScale={2.1}
            grainAmount={0.07}
            grainScale={2}
            grainAnimated={false}
            contrast={1.12}
            gamma={1}
            saturation={0.9}
            centerX={0}
            centerY={0}
            zoom={0.92}
          />
        </div>
        <div className="grain-layer" aria-hidden="true" />
        <div className="paper-grid" aria-hidden="true" />
        <CursorHalo />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
