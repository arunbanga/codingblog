import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.main_heading}>About Page</h1>
        <Image
          src="https://images.pexels.com/photos/12166026/pexels-photo-12166026.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          style={{ marginTop: "20px", borderRadius: "20px" }}
          width="300"
          height="300"
          alt="image"
          className={styles.img}
        />
      </div>
    </>
  );
};

export default about;
