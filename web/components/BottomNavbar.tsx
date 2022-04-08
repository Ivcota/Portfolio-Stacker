import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 grid w-screen h-16 grid-cols-3 place-items-center dark:bg-steel-100 dark:text-steel-900 ">
      <AiFillHome size={28} />
      <AiOutlineSearch size={28} />
      <FiSettings size={28} />
    </div>
  );
};

export default BottomNavbar;
