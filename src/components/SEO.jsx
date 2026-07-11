import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url }) {
  const defaultTitle = "Giriraj Marketing"
  const defaultDesc = "Empowering organizations with secure infrastructure, cloud solutions, software licensing, and digital transformation."
  const siteUrl = "https://www.girirajmktg.com"

  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const finalDesc = description || defaultDesc
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      
      {/* Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDesc} />
      
      <link rel="canonical" href={finalUrl} />
    </Helmet>
  )
}
