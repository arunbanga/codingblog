// import React from "react";
// import { useRouter } from "next/router";
// const pageNo = () => {
//   const router = useRouter();
//   const pageNumber = router.query.pageNo;
//   return <div>my {pageNumber} content</div>;
// };

// export default pageNo;

import React from "react";
import Navbar from "../../Components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((cur) => {
    return {
      params: {
        pageNo: cur.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const myData = ({ data }) => {
  const { id, body } = data;
  return (
    <>
      <Navbar />
      <div className="text-left border-2 p-6 w-[90%] mx-auto">
        <h3 className="border-2 border-blue-500 font-bold rounded-2xl w-6 text-center">
          {id}
        </h3>
        {/* <h2>{title}</h2> */}
        <p>{body}</p>
      </div>
    </>
  );
};

export default myData;
