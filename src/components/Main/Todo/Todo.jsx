/* eslint-disable react/prop-types */
import img from "/images/icon-check.svg";

import X from "/images/X.svg";
const Todo = ({ post, dark, posts, setPosts }) => {
  const handleDelete = () => {
    const clone = posts;
    const deleteIndex = clone.findIndex((item) => item.id === post.id);
    clone.splice(deleteIndex, 1);
    setPosts([...clone]);
  };

  const handleComplete = () => {
    const clone = posts;
    const index = clone.findIndex((item) => item.id === post.id);
    clone[index].isDone = !clone[index].isDone;
    setPosts([...clone]);
    console.log(post.isDone);
  };

  return (
    <>
      <div
        className={` ${
          dark
            ? "border-background3 bg-background"
            : "border-customColor6 bg-customColor"
        } p-[20px] text-[12px] border-solid border-b shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between`}
      >
        <div
          className={`${
            dark ? "shadow-custom" : "shadow-customtwo "
          } relative complete h-[20px] w-[20px] rounded-[50%] cursor-pointer z-10  ${
            post.isDone &&
            "bg-gradient-to-r from-background4 to-background5 shadow-none opacity-100"
          }`}
          onClick={handleComplete}
        >
          {post.isDone && (
            <img
              className={" absolute left-[20%] top-[25%]"}
              src={img}
              alt="iconCheck"
            />
          )}
        </div>

        <p
          className={`${
            dark && post.isDone
              ? "text-customColor8 opacity-40 line-through "
              : post.isDone
              ? "text-#D1D2DA opacity-40 line-through"
              : dark && "text-customColor7"
          }   text-customColor3 text-[14px] font-normal leading-normal tracking-tighter`}
        >
          {post.content}
        </p>
        <img
          onClick={handleDelete}
          className="w-[17px] h-[17px]  cursor-pointer"
          src={X}
          alt="delete_svg"
        />
      </div>
    </>
  );
};

export default Todo;
