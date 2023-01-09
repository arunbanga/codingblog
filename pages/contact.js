// import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import styles from "../styles/contact.module.css";
// import Head from "next/head";
// const contact = () => {
//   const [name, email] = useState();
//   const submitdata = (e) => {
//     e.preventDefault();
//   };
//   const handlechange = (e) => {
//     console.log(e);
//   };
//   return (
//     <>
//       <Head>
//         <title>Contact Page</title>
//       </Head>
//       <Navbar />
//       <div>
//         {/* <h1 className={styles.main_heading}>Contact page</h1> */}
//         <h1>Contact page</h1>
//         <p className="para">This is a contact page</p>
//         <style jsx>
//           {`
//             h1 {
//               color: pink;
//             }
//             .para {
//               color: green;
//             }\
//           `}
//         </style>
//         <div>
//           <form onSubmit={submitdata}>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 onChange={handlechange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 name="email"
//                 htmlFor="exampleInputPassword1"
//                 className="form-label"
//               >
//                 Email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 onChange={handlechange}
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 name="phoneno"
//                 htmlFor="exampleInputPassword1"
//                 className="form-label"
//               >
//                 PhoneNo.
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 onChange={handlechange}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default contact;

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/contact.module.css";
import Head from "next/head";

const contact = () => {
  const [additem, setAddItem] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    console.log(e);
    // console.log(e.target.name)
    // console.log(e.target.value)
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    alert("Form submit");
    console.log(user);
    setAddItem((prev) => {
      return [...prev, user];
    });
    setUser({
      name: "",
      email: "",
      password: "",
    });
    const { name, email, password } = user;
    const res = await fetch("api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    // const data = await res.json();
    // if (data.status === 200 || !data) {
    //   window.alert("invalid registration");
    //   console.log("invalid registration");
    // } else {
    //   window.alert("Registration succesful");
    //   console.log("registration succesfull");
    // }
  };
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h3 className={styles.title}>Contact Us</h3>
        <div className="form">
          <form method="POST" onSubmit={PostData} className={styles.form}>
            <div className={styles.input_field}>
              <label htmlFor="name" className={styles.label}>
                Name:
              </label>
              <input
                type="text"
                className={styles.input}
                name="name"
                id="name"
                value={user.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <br />
            <div className={styles.input_field}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                className={styles.input}
                autoComplete="off"
              />
            </div>
            <br />
            <div className={styles.input_field}>
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                className={styles.input}
                autoComplete="off"
              />
            </div>
            <br />

            <div>
              <input type="submit" value="Submit" className={styles.btn} />
            </div>
            {/* <div style={{ marginTop: "10px" }}>
              {additem.map((val) => {
                return (
                  <>
                    <div
                      style={{
                        border: "1px solid gray",
                        margin: "auto",
                        padding: "10px",
                      }}
                      key={val.id}
                    >
                      <p>{val.name}</p>
                      <p>{val.email}</p>
                      <p>{val.password}</p>
                    </div>
                  </>
                );
              })}
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default contact;
