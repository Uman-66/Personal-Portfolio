import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative z-10">
      <div className="wrap flex min-h-[70vh] flex-col justify-center py-24">
        <span className="eyebrow" style={{ "--eyebrow-color": "#7fc9e8" }}>
          404
        </span>

        <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
          This page isn&apos;t in the notebook.
        </h1>

        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
          The link is broken or the page moved. Everything worth reading is on the
          main page — studies, projects and the work behind them.
        </p>

        <Link href="/" className="btn mt-9 w-fit">
          <ArrowLeft size={14} /> Back to the portfolio
        </Link>
      </div>
    </section>
  );
}
