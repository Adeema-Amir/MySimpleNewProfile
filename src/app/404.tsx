"use client"
import Head from "next/head";
import Header from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="404: adeema"
        description="404 page for all our missing pages"
        canonical="https://nine4-3.vercel.app/404"
        openGraph={{
          url: "https://nine4-3.vercel.app/404",
        }}
      />
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Page Not Found
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}