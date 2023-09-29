import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  username: string;
  password: string;
}

export const LoginTop = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[rgb(251,226,236)] to-[#fdeff4]">
      {/* mobile */}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <div className="relative">
          <Image
            priority
            src="login-component/what-box-mobile.svg"
            width={1000}
            height={600}
            alt="bruh"
          />
          <form className="absolute left-1/2 top-[39%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-pink-200 p-6">
            <h1 className="mb-4 text-3xl">Login</h1>
            <input className="" />
            <input />
            <button>submit</button>
          </form>
          <Image
            className="absolute left-[50%] top-[77%] -translate-x-3/4 -translate-y-1/2"
            src="login-component/carousel-new-mobile.svg"
            width={427}
            height={397}
            alt=""
          />
        </div>
      </div>
      {/* desktop */}
      <div className="absolute inset-0 hidden items-center justify-center sm:flex">
        <div className="relative">
          <Image
            priority
            src="login-component/what-box.svg"
            width={1000}
            height={600}
            alt="bruh"
          />
          <form className="absolute left-[40%] top-[46%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-lg bg-pink-200 p-6">
            <h1 className="mb-4 text-3xl">Login</h1>
            <input
              //   placeholder="     username??"
              className="h-10 w-80 rounded-full border-solid border-pink-300 shadow-sm"
            />
            <input
              //   placeholder="     password??"
              className="h-10 w-80 rounded-full border-solid border-pink-300 shadow-sm"
            />
            <button>submit</button>
          </form>
          <Image
            className="absolute inset-0 translate-x-8 translate-y-4"
            src="login-component/carousel-new.svg"
            width={1129}
            height={622}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
