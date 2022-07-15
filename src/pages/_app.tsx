import type { AppProps } from "next/app";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Component {...pageProps}/>
    </div>
  );
};

export default MyApp;
