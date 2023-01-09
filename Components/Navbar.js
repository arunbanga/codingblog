import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <nav className="text-center p-4">
          <ul
            // style={{
            //   display: "flex",
            //   gap: "20px",
            //   justifyContent: "flex-end",
            //   listStyle: "none",
            // }}
            className="block md:flex md:gap-5 md:justify-end list-none"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
