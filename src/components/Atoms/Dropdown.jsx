import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ title, items, isOpen, toggleDropdown }) {
  return (
    <Menu as="div" className="">
      <Menu.Button
        as="button"
        onClick={toggleDropdown}
        className="flex lg:items-center lg:hover:bg-indigo-600 lg:hover:text-white font-semibold transition-colors duration-300 p-3 ease-in-out lg:justify-center justify-between   gap-x-1 text-secondary  rounded-full"
      >
        {title}
        <IoIosArrowDown
          size={16}
          className="-mr-1 text-secondary"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" relative lg:absolute z-10 mt-1 w-56 origin-top-right rounded-md lg:border overflow-hidden lg:bg-white lg:shadow-lg">
          {items.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href={item.element}
                  className={classNames(
                    active
                      ? "lg:bg-gray-100 lg:text-gray-900 font-semibold "
                      : "lg:text-gray-700 ",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};
