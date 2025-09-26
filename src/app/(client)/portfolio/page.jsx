"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Search as SearchIcon,
  Shuffle,
  ExternalLink,
  PenTool,
  Megaphone,
  Code2,
  BarChart3,
  Share2,
  Layout,
  ShoppingCart,
} from "lucide-react";

/** -------------------------------------------
 * Categories map 1:1 with your services
 * ------------------------------------------- */
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding", icon: PenTool },
  { id: "digital-marketing", label: "Digital Marketing", icon: Megaphone },
  { id: "web-dev", label: "Web App Development", icon: Code2 },
];

/** -------------------------------------------
 * Demo data — replace with your real projects
 * Each project links back to the service/tag
 * ------------------------------------------- */
const CASE_STUDIES = [
  {
    id: "cs-neofoods-logo",
    title: "NeoFoods Rebrand & Logo System",
    client: "NeoFoods",
    category: "branding",
    tags: ["Logo Design", "Brand Guidelines"],
    summary:
      "A modern visual identity and logo system that scaled across packaging, retail, and digital.",
    impact: [{ label: "Brand Recall", value: "+71%" }, { label: "NPS", value: "+18" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/branding/logo-design",
  },
  {
    id: "cs-fabrik-uiux",
    title: "Fabrik SaaS – UI/UX & Design System",
    client: "Fabrik",
    category: "branding",
    tags: ["UI/UX Design", "Design System"],
    summary:
      "Component-driven UI kit and product flows for faster feature shipping.",
    impact: [{ label: "Design Debt", value: "-60%" }, { label: "Ship Velocity", value: "2.4×" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/branding/ui-ux-design",
  },
  {
    id: "cs-kart-ecom-seo",
    title: "KART – Ecommerce SEO at Scale",
    client: "KART",
    category: "digital-marketing",
    tags: ["SEO", "Ecommerce SEO", "Content Marketing Services"],
    summary:
      "Programmatic SEO and content ops for 50k+ SKU website across 8 categories.",
    impact: [{ label: "Organic Sessions", value: "+192%" }, { label: "Revenue", value: "+63%" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/digital-marketing/seo/ecommerce-seo",
  },
  {
    id: "cs-snap-ppc",
    title: "SNAP – Full-funnel PPC (SaaS/B2B)",
    client: "SNAP",
    category: "digital-marketing",
    tags: ["PPC", "SaaS PPC / B2B PPC", "Google Ads", "LinkedIn Ads"],
    summary:
      "Multi-network campaigns with creative testing & lead quality optimization.",
    impact: [{ label: "SQLs", value: "+138%" }, { label: "CPL", value: "-34%" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/digital-marketing/ppc/saas-b2b-ppc",
  },
  {
    id: "cs-omni-social",
    title: "Omni – Social Strategy & Content",
    client: "Omni",
    category: "digital-marketing",
    tags: ["Social Media Marketing", "Content Creation", "Influencer Marketing"],
    summary:
      "Always-on content engine & influencer collabs for community growth.",
    impact: [{ label: "Engagement Rate", value: "3.1×" }, { label: "Followers", value: "+220k" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/digital-marketing/smm/content-creation",
  },
  {
    id: "cs-mart-headless",
    title: "MART – Headless Commerce Web App",
    client: "MART",
    category: "web-dev",
    tags: ["Custom Web Design and Development", "CMS", "Web Infrastructure & Maintenance"],
    summary:
      "Headless storefront with CMS + CDN, optimized for speed and scale.",
    impact: [{ label: "Core Web Vitals", value: "Green" }, { label: "TTFB", value: "↓ 43%" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/web-dev/custom",
  },
  {
    id: "cs-aurora-ai",
    title: "Aurora – AI & GPT Integration",
    client: "Aurora Health",
    category: "web-dev",
    tags: ["AI & GPT Integration", "Automation"],
    summary:
      "Patient support assistant and internal tooling powered by GPT workflows.",
    impact: [{ label: "Ticket Deflection", value: "52%" }, { label: "CSAT", value: "+0.7" }],
    cover: "/images/aboutus/about-banner.jpg",
    href: "/web-dev/ai-gpt",
  },
];

/** Build a tag list from the data for the tag filter */
const ALL_TAGS = Array.from(
  new Set(CASE_STUDIES.flatMap((p) => p.tags))
).sort();

export default function PortfolioPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");

  const data = useMemo(() => {
    let items = [...CASE_STUDIES];

    if (category !== "all") items = items.filter((i) => i.category === category);
    if (tag !== "all") items = items.filter((i) => i.tags.includes(tag));

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.client.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [category, query, tag]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-4 py-14 md:py-18">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-blue-600">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Work across Branding, Digital Marketing & Web Apps
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A few highlights from design systems and rebrands to SEO at scale,
              full-funnel PPC, social strategy, and high-performance web apps.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                const active = category === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {Icon ? <Icon className="w-4 h-4" /> : null}
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Tag selector */}
            <div className="flex items-center gap-2 ml-auto">
              <Shuffle className="w-4 h-4 text-slate-500" />
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              >
                <option value="all">All tags</option>
                {ALL_TAGS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              {/* Search */}
              <label className="relative ml-2">
                <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="pl-9 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container mx-auto px-4 py-10">
          {data.length === 0 ? (
            <div className="text-center text-slate-500 py-20">No results. Try another filter.</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.map((p) => (
                <CaseStudyCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t">
        <div className="container mx-auto px-4 py-14">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Want a case study in your category?</h2>
              <p className="mt-2 opacity-90">
                Tell us your goals—brand, acquisition, or product—and we’ll share relevant work.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/connect-us"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50 transition"
              >
                Start a project <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------ Card ------------- */
function CaseStudyCard({ title, client, summary, impact, tags, cover, href, category }) {
  const Icon = category === "branding" ? PenTool : category === "web-dev" ? Code2 : Megaphone;
  const secondary =
    category === "branding" ? Layout : category === "web-dev" ? ShoppingCart : BarChart3;

  return (
    <div className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48 w-full bg-slate-100">
        {/* Placeholder if you don't have an image yet */}
        {cover ? (
          <Image src={cover} alt={title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-slate-400">
            <Sparkles className="w-8 h-8" />
          </div>
        )}
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] font-medium text-slate-700 border border-slate-200">
          <Icon className="w-3.5 h-3.5" />
          {capitalize(category)}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-slate-900 font-semibold group-hover:text-blue-700 transition">
              {title}
            </h3>
            <p className="text-sm text-slate-500">{client}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <secondary className="w-4 h-4" />
          </div>
        </div>

        <p className="mt-2 text-slate-700 text-sm">{summary}</p>

        {/* KPIs */}
        {impact?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {impact.map((k, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 text-[12px] font-medium"
              >
                {k.label}: <strong className="font-semibold">{k.value}</strong>
              </span>
            ))}
          </div>
        ) : null}

        {/* Tags */}
        {tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Link */}
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-blue-700 font-semibold hover:underline"
          >
            View service <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------ helpers ------------- */
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ");
}
