import Head from "next/head";

import { Login, Register, Rickroll } from "../components/Gean";
import { HomePage } from "~/components/HomePage";
import HamburgerMenu from "~/components/Hamburger";

export default function Home() {
  return (
    <>
      <Head>
        <title>Building 9</title>
        <meta name="description" content="btuhdasd" />
        <link rel="icon" href="/logo-new.png" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {/* <h1 className="absolute top-1/4 justify-center text-5xl text-white">
          home page ไรวะ ด่วนนนน
        </h1>
        <div className="flex w-full justify-center">
          <div className="mt-14 flex w-3/4 flex-wrap justify-center gap-x-12 gap-y-10">
            <Login />
            <Register />
            <Rickroll />
          </div>
        </div> */}
        {/* <div className="mb-4 flex h-12 max-w-full items-center justify-start rounded-md bg-black text-white">
          <div className="flex md:hidden">
            <HamburgerMenu />
          </div>
          <div className="hidden md:flex">
            <Links />
          </div>
        </div> */}
        <HomePage />
      </main>
    </>
  );
}
