import React from "react";
import Navbar from "../Components/Navbar";
import Head from "next/head";
const product = () => {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <Navbar />
      <div>Product page</div>
    </>
  );
};

export default product;
