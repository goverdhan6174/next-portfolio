import Head from "next/head";
import Home from "../components/home/home";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Random</title>
        <meta name="description" content="Frontend WebDeveloper Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
