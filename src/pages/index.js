import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={styles.header}> 
          <h1>docs.orkan</h1>
          <p>Dokümantasyon çok sıkıcı bir iş</p>
        </div>
        <div className={styles.links}>
          <div className={styles.buttons}>
              <Link
                className={`button button--secondary button--lg ${styles.buttonWithMargin}`}
                to="/docs/ee">
                Elektrik-Elektronik ⚡
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.buttonWithMargin}`}
                to="/docs/haberlesme">
                Haberleşme 📡
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.buttonWithMargin}`}
                to="/docs/agsistem">
                Ağ ve Sistem 🌐
              </Link>
              
            </div>
            <div className={styles.buttons}>
            <Link
                className={`button button--secondary button--lg ${styles.buttonWithMargin}`}
                to="/docs/karisik">
                Karışık 🤯
              </Link>
            <Link
                className={`button button--primary button--lg ${styles.buttonWithMargin}`}
                to="/docs/category/notlar">
                Notlar 📖
              </Link>
            </div>
          </div>
      </main>
    </Layout>
  );
}
