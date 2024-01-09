import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  
  return (
    <div className=" flex cursor-pointer items-center  text-gray-500 md:px-10 sm:h-12 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 text-center sm:h-7 mx-auto  group-hover:text-blue-500 flex-shrink ${
          active ? ("text-blue-500") : (" text-gray-500")
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
