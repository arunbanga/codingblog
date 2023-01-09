import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <div>
        <nav>
          <ul>
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
        <div>
          <h1>404</h1>
        </div>

        <div>
          <h2>We are sorry,Page not found</h2>
          <p>
            The page you are looking for might have been removed have its name
            chage or its temporalily unavailable.
          </p>
          {/* <Link href="/" onClick={handleClick}>Back to Homepage</Link> */}
          <a onClick={handleClick}>Back to Homepage</a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
