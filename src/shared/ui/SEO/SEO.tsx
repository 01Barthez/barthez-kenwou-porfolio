import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  lang = 'fr',
  openGraph,
  additionalMeta = [],
}) => {
  const siteName = 'Frontend Starter';
  const pageTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      {openGraph?.title && <meta property="og:title" content={openGraph.title} />}
      {openGraph?.description && <meta property="og:description" content={openGraph.description} />}
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      <meta property="og:site_name" content={siteName} />
      {openGraph?.type && <meta property="og:type" content={openGraph.type} />}

      {/* Twitter Card */}
      {openGraph?.image && <meta name="twitter:card" content="summary_large_image" />}
      {openGraph?.title && <meta name="twitter:title" content={openGraph.title} />}
      {openGraph?.description && (
        <meta name="twitter:description" content={openGraph.description} />
      )}

      {/* Additional custom meta tags */}
      {additionalMeta.map((m, i) =>
        m.name ? (
          <meta key={i} name={m.name} content={m.content} />
        ) : (
          <meta key={i} property={m.property!} content={m.content} />
        ),
      )}
    </Helmet>
  );
};

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

// use named exports only to comply with lint rules
