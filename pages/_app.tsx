import "@/styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/custom.css";
import "../styles/style.css";
import "../public/js/loader.js";
import "../styles/fonts/flaticon/font/flaticon.css";
import "../styles/fonts/icomoon/style.css";
import "../styles/fonts/feather/style.css";
import type { AppProps } from "next/app";
import CustomScript from "@/components/CustomScript";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  //use dynamic import to load the aos script

  const loadAOS = async () => {
    const aos = await import("../public/js/aos.js");
    aos.default.init();
  };

  loadAOS();

  return (
    <body suppressHydrationWarning={true}>
      <DefaultLayout>
        <CustomScript />
        <Component {...pageProps} />
      </DefaultLayout>
    </body>
  );
}
