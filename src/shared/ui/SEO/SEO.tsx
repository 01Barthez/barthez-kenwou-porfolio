import React from 'react';

export type OpenGraph = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
};

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  lang?: string;
  openGraph?: OpenGraph;
  additionalMeta?: Array<{ name?: string; property?: string; content: string }>;
};

type MetaLike = { name?: string; property?: string; content: string };

function upsertMetaTag(meta: MetaLike) {
  if (!meta.content) return;

  const selector = meta.name
    ? `meta[name="${CSS.escape(meta.name)}"]`
    : `meta[property="${CSS.escape(meta.property ?? '')}"]`;

  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    if (meta.name) el.setAttribute('name', meta.name);
    if (meta.property) el.setAttribute('property', meta.property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', meta.content);
}

function upsertLinkTag(rel: string, href: string) {
  if (!href) return;
  const selector = `link[rel="${CSS.escape(rel)}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  lang = 'fr',
  openGraph,
  additionalMeta = [],
}) => {
  const siteName = 'Portfolio Barthez Kenwou';
  const pageTitle = title ? `${title} | ${siteName}` : siteName;

  React.useEffect(() => {
    // Title + lang
    document.title = pageTitle;
    document.documentElement.lang = lang;

    // Canonical link
    if (canonical) upsertLinkTag('canonical', canonical);

    // Standard meta
    if (description) upsertMetaTag({ name: 'description', content: description });

    // OpenGraph
    upsertMetaTag({ property: 'og:site_name', content: siteName });
    if (openGraph?.title) upsertMetaTag({ property: 'og:title', content: openGraph.title });
    if (openGraph?.description)
      upsertMetaTag({ property: 'og:description', content: openGraph.description });
    if (openGraph?.url) upsertMetaTag({ property: 'og:url', content: openGraph.url });
    if (openGraph?.image) upsertMetaTag({ property: 'og:image', content: openGraph.image });
    if (openGraph?.type) upsertMetaTag({ property: 'og:type', content: openGraph.type });

    // Twitter Card
    if (openGraph?.image) upsertMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (openGraph?.title) upsertMetaTag({ name: 'twitter:title', content: openGraph.title });
    if (openGraph?.description)
      upsertMetaTag({ name: 'twitter:description', content: openGraph.description });

    // Additional custom meta
    additionalMeta.forEach((m) => upsertMetaTag(m));
  }, [additionalMeta, canonical, description, lang, openGraph, pageTitle, siteName]);

  return null;
};

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => children;

// use named exports only to comply with lint rules
