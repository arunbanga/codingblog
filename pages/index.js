import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/index.module.css";
import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer";
const index = () => {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <Head>
          <title>Home page</title>
          <meta name="description" content="home" />
          <meta name="keywords" content="Next.js" />
          <meta name="author" content="Next.Js" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
        </Head>
        <div className={styles.container}>
          <h1 className="text-2xl">Welcome to the world of NextJs</h1>
          <main className={styles.main}>
            <h1>&lt;Blogs/&gt;</h1>
            <Image
              src="https://images.pexels.com/photos/12166026/pexels-photo-12166026.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              width={200}
              height={30}
              alt="logo"
              className={styles.img}
            />
          </main>
          <div className={styles.blogs}>
            <h2>Latest Blogs</h2>
            <p>How to Learn Next Js.</p>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default index;

// import $ from "jquery";
// import { useEffect } from "react";
// export const index = () => {
//   useEffect(() => {
//     alert($("#input").val());
//   });
//   return (
//     <>
//       <div>
//         <h1>This is a React App.</h1>
//       </div>
//       <div>
//         <input name="input" id="input" value="Jquery in React Js?" />
//       </div>
//     </>
//   );
// };
// export default index;
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import "./style.css";
// import React from "react";

// const index = () => {
//   const settings = {
//     infinite: true,
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   return (
//     <>
//       <div className="tag">
//         <h1>Image Gallery</h1>
//       </div>
//       <div className="imgslider">
//         <Slider {...settings}>
//           <div>1</div>
//           <div>2</div>
//           <div>3</div>
//           <div>4</div>
//           <div>5</div>
//         </Slider>
//       </div>
//     </>
//   );
// };
// export default index;

//Call API//

// const index = () => {
//   const callAPI = async () => {
//     try {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
//       const data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <button onClick={callAPI}>Call Api</button>
//       <div></div>
//     </>
//   );
// };

// export default index;
