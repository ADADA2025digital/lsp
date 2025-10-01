import { Helmet } from "react-helmet-async";
import { seoData } from "../Contants/Data";

const SeoHead = (props) => {
  const seo = {
    ...seoData,
    ...props,
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{seo.title}</title>
      <meta
        name="description"
        content="Lo Surdo Braithwaite has been established since 1972 providing business and taxation services to the broader community."
      />
      <meta
        name="keywords"
        content="Private residential aged care, 24/7 nursing and clinical care, Aged care facility Melbourne, Aged care facility Victoria, NDIS support services, NDIS registered provider, Supported independent living (SIL), Government funded support at home, Private self-funded aged care, Supported residential accommodation, High intensity care provider, Compassionate aged and disability care, Dementia care Melbourne, Palliative Care Victoria, Respite care services, Aged care consultation services, Disability support coordinator, Personalised care plans, Aged care services Sydney NSW, Aged care services Melbourne VIC"
      />
      <meta name="author" content="Rosewood Gardens" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.losurdobraithwaite.com.au/" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Lo Surdo Braithwaite | Providing business and taxation services to the broader community."
      />
      <meta
        property="og:description"
        content="Lo Surdo Braithwaite has been established since 1972 providing business and taxation services to the broader community."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.losurdobraithwaite.com.au/" />
      <meta
        property="og:image"
        content="https://www.losurdobraithwaite.com.au/assets/logo.png"
      />

      {/* Facebook  */}
      <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
      <meta property="fb:admins" content="YOUR_FACEBOOK_USER_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Lo Surdo Braithwaite | Providing business and taxation services to the broader community."
      />
      <meta
        name="twitter:description"
        content="Lo Surdo Braithwaite has been established since 1972 providing business and taxation services to the broader community."
      />
      <meta
        name="twitter:image"
        content="https://www.losurdobraithwaite.com.au/assets/logo.png"
      />
      <meta name="twitter:site" content="@rosewoodgardens" />
      <meta name="twitter:creator" content="@rosewoodgardens" />
    </Helmet>
  );
};

export default SeoHead;
