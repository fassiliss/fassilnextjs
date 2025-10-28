import AxoState from "@/src/Context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AxoState>
      <Component {...pageProps} />
    </AxoState>
  );
}
