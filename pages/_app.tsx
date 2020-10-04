import "../styles/global.css";

export interface App {
  Component: any;
  pageProps: any;
}
export default function App({ Component, pageProps }: App) {
  return <Component {...pageProps} />;
}
