import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import App from './../pages/_app';

const Header = () => {
  return (
    <div className="bg-[#fff] shadow-sm flex px-20 py-4 mx-2/12 justify-between ">
      <div>
        <h1>
          <Image
            src={'/main_logo.png'}
            alt={'Logo'}
            width={80}
            height={80}
            className="h-8 w-48"
          ></Image>
        </h1>
      </div>
      <div>
        <ul className="flex">
          <li className="mx-4 text-[18px]">
            <a href="" className="font-poppins">
              Dashboard
            </a>
          </li>
          <li className="mx-4 relative text-[18px]">
            <span className="absolute right-[-5px] bg-red-500 font-mono w-4 h-4 flex justify-center items-center rounded-full p-2 text-sm top-[-6px]">
              4
            </span>
            <a href="">Messages</a>
          </li>
          <li className="mx-4 text-[18px] flex">
            <Image
              className="h-10 w-10"
              height={20}
              width={20}
              alt={'Image'}
              src={'/person.png'}
            ></Image>
            <a href="">Account</a>
            <MdKeyboardArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
