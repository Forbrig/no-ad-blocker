import React from "react";
import Head from "next/head";

import styles from "./page.module.scss";

const NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Page</title>
      </Head>
      <header className={styles.header}>{/* Your header content */}</header>
      <main className={styles.main}>
        <aside className={styles.ads}>
          <div className={styles.ad}>Ad 1</div>
        </aside>
        <section className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </section>
        <aside className={styles.ads}>
          <div className={styles.ad}>Ad 2</div>
        </aside>
      </main>
      <footer className={styles.footer}>{/* Your footer content */}</footer>
    </div>
  );
};

export default NextPage;
