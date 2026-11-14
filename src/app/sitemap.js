const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap() {
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl.replace(/\/$/, ""),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
