import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Axo Personal React NextJS Portfolio</title>
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
