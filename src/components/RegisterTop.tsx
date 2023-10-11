import Image from "next/image";
import { Formik, Field, Form, FormikHelpers } from "formik";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import localFont from "next/dist/compiled/@next/font/dist/local";

interface Values {
  username: string;
  password: string;
}

export const RegisterTop = () => {
  return (
    <div className="relative h-screen w-full bg-[rgb(251,226,236)]">
      {/* mobile */}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <div className="relative">
          <Image
            className="absolute inset-0 bottom-0 h-screen w-[35%]"
            priority
            src="register-component/swing.svg"
            width={598}
            height={515}
            alt=""
          />
          <div className="relative left-1/2 top-1/2 z-10 flex -translate-x-1/2 flex-col items-center justify-center gap-8">
            <h1 className="text-bold text-3xl">Register</h1>
            <div className="flex w-[90%] grid-cols-2 flex-wrap justify-center gap-x-[10%] gap-y-8">
              <input className="h-10 w-full rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-full rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-full rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-[45%] rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-[45%] rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-full rounded-full border-solid border-pink-300 shadow-xl" />
              <input className="h-10 w-full rounded-full border-solid border-pink-300 shadow-xl" />
            </div>
            <button className="h-10 w-[15%] rounded-xl border-solid border-pink-300 bg-white text-center align-middle shadow-sm">
              submit
            </button>
          </div>
          <Image
            className="absolute bottom-0 right-0 h-screen w-[35%] translate-y-[30%]"
            priority
            src="register-component/castel.svg"
            width={733}
            height={711}
            alt=""
          />
        </div>
      </div>
      {/* desktop */}
      <div className="absolute inset-0 hidden items-center justify-center sm:flex">
        <div className="relative">
          <Image
            className="absolute inset-0 bottom-0 h-screen w-[35%]"
            priority
            src="register-component/swing.svg"
            width={598}
            height={515}
            alt=""
          />
          <div className="relative left-1/2 top-36 z-10 flex h-full -translate-x-1/2 flex-col items-center justify-center gap-8">
            <h1 className="text-bold text-3xl">Register</h1>
            <div className="flex w-1/2 grid-cols-2 flex-wrap justify-center gap-x-[5%] gap-y-4">
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="เลขประจำตัวนักเรียน"
              />
              <div className="h-10 w-[80%] rounded-full border-solid border-pink-300 bg-white text-center shadow-xl">
                {/* <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">Open Menu</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Example with disabled actions"
                    disabledKeys={["edit", "delete"]}
                  >
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                    >
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
              </div>
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="ชื่อ"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="นามสกุล"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="ชื่อเล่น"
              />
              <input
                className="h-10 w-[37.5%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="ห้อง"
              />
              <input
                className="h-10 w-[37.5%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="เลขที่"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="Email (จำเป็นต้องใช้อีเมลโรงเรียน)"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="ยืนยัน Email"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="เบอร์โทรศัพท์"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="Line ID"
              />
              <input
                className="h-10 w-[37.5%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="Instagram"
              />
              <input
                className="h-10 w-[37.5%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="Facebook"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="Password"
              />
              <input
                className="h-10 w-[80%] rounded-full border-solid border-pink-300 text-center shadow-xl"
                required
                placeholder="ยืนยัน Password"
              />
            </div>
            <button className="h-10 w-[15%] rounded-xl border-solid border-pink-300 bg-white shadow-sm">
              submit
            </button>
          </div>
          <Image
            className="absolute bottom-0 right-0 flex h-screen w-[35%] translate-y-[15%]"
            priority
            src="register-component/castel.svg"
            width={733}
            height={711}
            alt=""
          />
          <Image
            className="absolute bottom-0 flex h-screen w-full translate-y-[35%]"
            priority
            src="register-component/grass.svg"
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
