import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import MainPage from "@/components/mainpage";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김동우의 포트폴리오</title>
        <meta name="description" content="나의 포트폴리오"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <MainPage></MainPage>
    </Layout>
  );
}
