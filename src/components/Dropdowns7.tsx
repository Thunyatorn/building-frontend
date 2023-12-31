import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { promises as fs } from "fs";

export default function Dropdowns7() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-auto justify-center gap-x-1.5 rounded-md px-3 py-2 font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-900">
          กต.๙
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`
                    {active ? "bg-gray-100 text-gray-900" : "text-gray-900"}
                    block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200
                  `}
                >
                  FAQ
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`
                    {active ? "bg-gray-100 text-gray-900" : "text-gray-900"}
                    block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200
                  `}
                >
                  ครู
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`
                    {active ? "bg-gray-100 text-gray-900" : "text-gray-900"}
                    block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200
                  `}
                >
                  B9SC'66
                </a>
              )}
            </Menu.Item>
          </div>
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`
                    {active ? "bg-gray-100 text-gray-900" : "text-gray-900"}
                    block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200
                  `}
                >
                  wtf
                </a>
              )}
            </Menu.Item>
          </div> */}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
