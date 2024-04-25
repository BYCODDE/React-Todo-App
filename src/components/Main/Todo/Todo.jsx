/* eslint-disable react/prop-types */

import X from "/images/X.svg";
const Todo = ({ post, dark }) => {

  return (
    <>
      {dark ? (
        <div className=" border-b-4 border-red-700  bg-background rounded-md shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between p-[20px]">
          <div className=" shadow-custom  h-[20px] w-[20px] rounded-[50%] bg-white cursor-pointer"></div>
          <p className="text-customColor3 text-[14px] font-normal leading-normal tracking-tighter">
            {post.content}
          </p>
          <img
            className="w-[17px] h-[17px]  cursor-pointer"
            src={X}
            alt="delete_svg"
          />
        </div>
      ) : (
        <div className=" border-b-4 border-red-700  bg-customColor rounded-md shadow-lg text-customColor2 text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
          <div className="ml-[20px] shadow-customColor2 h-[20px] w-[20px] rounded-[50%] bg-customColor "></div>
          <p className="text-customColor3 text-[14px] font-normal leading-normal tracking-tighter">
            {post.content}
          </p>
          <img
            className="w-[17px] h-[17px]  cursor-pointer"
            src={X}
            alt="delete_svg"
          />
        </div>
      )}
    </>
  );
};

export default Todo;
