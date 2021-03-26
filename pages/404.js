import Head from 'next/head'
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
    <Head>
      <title>Ninja List | 404</title>
    </Head>
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That page can not be found</h2>
      <p>
        Go back to
        <Link href="/">
          <a className="not-found-link">homepage</a>
        </Link>
      </p>
    </div>
    </>
  );
};

export default NotFound;
