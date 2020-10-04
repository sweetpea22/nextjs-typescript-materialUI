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
}: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <NavBar
        links={[{ text: "Twitter" }, { text: "Dribble" }, { text: "Format" }]}
      />
    </header>
    {children}
    <footer>
      <hr />
      <span>Hello</span>
    </footer>
  </div>
);

export default Layout;
