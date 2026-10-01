import { FrontPage } from "@/components/FrontPage";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main className="container main-content">
        <FrontPage />
      </main>
    </div>
  );
}
