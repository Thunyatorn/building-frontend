import Head from "next/head";

import { Login } from "../components/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Building 9</title>
        <meta name="description" content="btuhdasd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Login />
          </div>
        </div>
      </main>
    </>
  );
}