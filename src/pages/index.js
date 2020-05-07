import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <h1 className="p-3 mb-4 text-4xl font-bold">
          Baking up something new...
        </h1>
        <h3 className="p-3 mb-4 text-xl font-bold">Be back soon.</h3>
      </section>
    </Layout>
  );
}

export default IndexPage;
