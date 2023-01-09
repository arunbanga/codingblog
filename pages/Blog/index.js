import React from "react";
import Navbar from "../../Components/Navbar";
import Link from "next/link";
import Head from "next/head";
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const Blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Navbar />
      <div className="text-center text-2xl font-bold py-4">Blog Page</div>
      {data.slice(0, 5).map((cur) => {
        return (
          <div key={cur.id} className="flex  gap-2 px-4 hover:text-blue-700">
            <h3 className="font-bold">{cur.id}</h3>
            <Link href={`/Blog/${cur.id}`}>
              <h4>{cur.title}</h4>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Blog;

//get static props//

// import React from "react";

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.API_URL}/users`);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// };
// const Blog = ({ data }) => {
//   return (
//     <>
//       <div>
//         <ul>
//           {data.map((cur) => {
//             return (
//               <>
//                 <div key={cur.id}>
//                   <li>{cur.name}</li>
//                   <li>{cur.username}</li>
//                   <li>{cur.address.city}</li>
//                 </div>
//               </>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Blog;

//get server side blogs//
// import React, { useState } from "react";

// const Blog = ({ data }) => {
//   return (
//     <>
//       <div>
//         {data.map((val) => {
//           return (
//             <>
//               <div>
//                 <p>{val.name}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export const getServerSideProps = async (context) => {
//   console.log(context.req);
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: { data },
//   };
// };
// export default Blog;

//client side data fetching//
