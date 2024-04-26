/* eslint-disable react/prop-types */

import X from "/images/X.svg";
const Todo = ({ post, dark, handleComplete, completed }) => {
  return (
    <>
      {dark ? (
        <div className="text-[12px]   border-b border-background3 border-solid bg-background  shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between p-[20px]">
          {completed ? (
            <div
              onClick={handleComplete}
              className=" shadow-custom  h-[20px] w-[20px] rounded-[50%] bg-white cursor-pointer"
            ></div>
          ) : (
            <div
              onClick={handleComplete}
              className=" shadow-none h-[20px] w-[20px] rounded-[50%] bg-gradient-to-r from-background4 to-background5"
            ></div>
          )}
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
        <div className=" border-b border-customColor6 border-solid bg-customColor  shadow-lg text-customColor2 text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
          {completed ? (
            <div className="shadow-customColor2 h-[20px] w-[20px] rounded-[50%] bg-customColor cursor-pointer"></div>
          ) : (
            <div className="shadow-none h-[20px] w-[20px] rounded-[50%] bg-gradient-to-r from-background4 to-background5 cursor-pointer"></div>
          )}

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
