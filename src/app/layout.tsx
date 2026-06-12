import type { Metadata } from "next";
import { JsonLdScript } from "next-seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} — Software Engineer`, template: `%s — ${profile.name}` },
  description: profile.brand,
  keywords: ["Rajith S", "Software Engineer", "Cloud Computing", "Distributed Systems", "DevOps", "AI", "Networking", "Full Stack"],
  openGraph: { title: `${profile.name} — Software Engineer`, description: profile.brand, url: profile.site, siteName: profile.name, type: "website" },
  twitter: { card: "summary_large_image", title: `${profile.name} — Software Engineer`, description: profile.brand },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, email: profile.email, url: profile.site, sameAs: [profile.github, profile.linkedin, profile.leetcode], knowsAbout: ["Software Engineering", "Distributed Systems", "Cloud Computing", "DevOps", "Networking", "AI", "Machine Learning", "System Design"] };
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <JsonLdScript id="rajith-profile-jsonld" scriptKey="rajith-profile" data={jsonLd} />
        <div className="noise" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
