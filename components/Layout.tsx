import React, { ReactNode } from "react";
import NavBar from "../components/common/NavBar";
import Head from "next/head";
import styles from "./layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Thomas Amiri Product Designer Portfolio",
}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <NavBar
          links={[
            { text: "Twitter", link: "https://twitter.com/tomoamiri" },
            { text: "Dribble", link: "https://dribbble.com/tomoamiri" },
            { text: "Format", link: "https://dribbble.com/tomoamiri" },
          ]}
        />
      </header>
      {children}
      <footer>
        <hr></hr>
        <p>designed by rain</p>
      </footer>
    </div>
  );
};

export default Layout;
