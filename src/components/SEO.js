import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ title, description, image, article }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {article && <meta property="og:type" content="article" />}
      {article && (
        <meta
          property="og:article:author"
          content="https://www.facebook.com/bradtraversy"
        />
      )}
      {article && (
        <meta
          property="og:article:published_time"
          content="2018-09-16T05:00:00+01:00"
        />
      )}
      {article && (
        <meta
          property="og:article:modified_time"
          content="2018-09-16T19:00:00+01:00"
        />
      )}
      {article && (
        <meta
          property="og:article:expiration_time"
          content="2018-11-16T05:00:00+01:00"
        />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://www.yourdomain.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
