import React, { type ReactElement } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";

function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="row">
        <div className={clsx("col col--4 padding-vert--md", styles.bannerText)}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Link
            className="button button--secondary button--lg"
            to="/cv/resume/"
          >
            View resume
          </Link>
        </div>
        <div className="col col--8 padding-vert--md">
          <img
            className={styles.bannerImage}
            src={require("@site/static/img/photo.png").default}
            alt="Ilya Zuev"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} CV`} description="Information">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
