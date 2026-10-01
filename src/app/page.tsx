import { FrontPage } from "@/components/FrontPage";
import { PortfolioSections } from "@/components/PortfolioSections";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main className="container main-content">
        <FrontPage />
        <PortfolioSections />
      </main>
    </div>
  );
}
