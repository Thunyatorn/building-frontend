import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  username: string;
  password: string;
}

export const LoginTop = () => {
  return (
    <div className="relative h-screen w-full bg-[rgb(251,226,236)]">
      {/* mobile */}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <div className="relative">
          <Image
            className="relative z-10"
            src="login-component/what-box-mobile.svg"
            width={1000}
            height={600}
            alt="bruh"
          />
          <form className="absolute left-1/2 top-[39%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-pink-200 p-6">
            <h1 className="mb-4 text-3xl">Login</h1>
            <input
              className="rounded-full border-solid border-pink-300 shadow-sm"
              // placeholder="     user whattt"
            />
            <input
              className="rounded-full border-solid border-pink-300 shadow-sm"
              // placeholder="     pass"
            />
            <button className="w-36 rounded-xl border-solid border-pink-300 bg-white align-middle shadow-sm">
              submit
            </button>
          </form>
          <Image
            className="absolute left-1/2 top-[76%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center"
            src="/login-component/carousel-new-mobile-3.png"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="absolute bottom-0 right-0 z-0"
            src="login-component/roller-coaster-1.svg"
            width={462}
            height={839}
            alt=""
          />
          <Image
            className="absolute bottom-0 left-0 z-0"
            src="login-component/roller-coaster-2.svg"
            width={462}
            height={801}
            alt=""
          />
          {/* <Image
            className="absolute"
            src="login-component/grass-new.svg"
            width={548}
            height={543}
            alt=""
            // where wa???
          /> */}
        </div>
      </div>
      {/* desktop */}
      <div className="absolute inset-0 hidden items-center justify-center sm:flex">
        <div className="relative">
          <Image
            className="relative z-10"
            src="login-component/what-box.svg"
            width={1000}
            height={600}
            alt="bruh"
          />
          <form className="absolute left-[38.5%] top-[46%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-pink-200 p-6">
            <h1 className="mb-4 text-3xl">Login</h1>
            <input
              // placeholder="     username??"
              className="h-10 w-80 rounded-full border-solid border-pink-300 shadow-sm"
            />
            <input
              // placeholder="     password??"
              className="h-10 w-80 rounded-full border-solid border-pink-300 shadow-sm"
            />
            <button className="h-10 w-36 rounded-xl border-solid border-pink-300 bg-white align-middle shadow-sm">
              submit
            </button>
          </form>
          <Image
            className="absolute inset-0 z-10 translate-x-8 translate-y-4"
            src="login-component/carousel-new.svg"
            width={1129}
            height={622}
            alt=""
          />
          <Image
            className="absolute bottom-0"
            src="login-component/rrrr.svg"
            width={1739}
            height={702}
            alt=""
          />
          <Image
            className="absolute bottom-0"
            src="login-component/grass.svg"
            width={1600}
            height={910}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
