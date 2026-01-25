export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bharat H2O",
    description:
      "Transform your hospitality business with premium custom-branded water bottles. Trusted by 100+ restaurants, cafés, and hotels across India.",
    url: "https://bharath20.com",
    logo: "https://bharath20.com/Logo.png",
    image: "https://bharath20.com/heroimg.jpeg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Custom Branded Water Bottles",
      "Private Label Water",
      "Restaurant Supplies",
      "Hotel Amenities",
    ],
    knowsAbout: [
      "Custom water bottles",
      "Branded water",
      "Restaurant supplies",
      "Hotel water bottles",
      "Hospitality supplies",
    ],
    sameAs: [
      // Add your social media URLs here
      // "https://www.facebook.com/bharath2o",
      // "https://www.instagram.com/bharath2o",
      // "https://www.linkedin.com/company/bharath2o",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bharat H2O",
    url: "https://bharath20.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharath20.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bharat H2O",
    url: "https://bharath20.com",
    logo: "https://bharath20.com/Logo.png",
    description:
      "Premium custom-branded water bottles for restaurants, cafés, and hotels across India.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
