import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Rumman Aslam | AI/ML Portfolio",
  description:
    "Portfolio of Muhammad Rumman Aslam, a BS Software Engineering student working in machine learning and trustworthy clinical AI.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Rumman Aslam | AI/ML Portfolio",
    description: "Machine learning, medical image analysis, and trustworthy clinical AI.",
    url: SITE_URL,
    type: "profile",
    firstName: "Muhammad Rumman",
    lastName: "Aslam",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: profile.name,
                email: `mailto:${profile.email}`,
                url: SITE_URL,
                sameAs: [profile.links.github, profile.links.linkedin, profile.links.medium],
                jobTitle: "ML Engineer Intern",
                affiliation: { "@type": "EducationalOrganization", name: "University of Agriculture, Faisalabad" },
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
