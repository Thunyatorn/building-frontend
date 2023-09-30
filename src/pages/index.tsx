import Head from "next/head";

import { Login, Register, Rickroll } from "../components/Gean";

export default function Home() {
  return (
    <>
      <Head>
        <title>Building 9</title>
        <meta name="description" content="btuhdasd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="absolute top-1/4 justify-center text-5xl text-white">
          home page ไรวะ ด่วนนนน
        </h1>
        <div className="flex w-full justify-center">
          <div className="mt-14 flex w-3/4 flex-wrap justify-center gap-x-12 gap-y-10">
            <Login />
            <Register />
            <Rickroll />
          </div>
        </div>
      </main>
    </>
  );
}
