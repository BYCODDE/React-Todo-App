/* eslint-disable react/prop-types */

import { useState } from "react";
import Todo from "./Todo/Todo";

export default function Main({ dark, posts, setPosts }) {
  const [info, setInfo] = useState("all");
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const handleClear = () => {
    const updatedPosts = posts.filter((post) => !post.isDone);
    setPosts(updatedPosts);
  };

  const handleAll = () => {
    setInfo("all");
    setColor(!color);
    setColor2(false);
    setColor3(false);
  };
  const handleActive = () => {
    setInfo("active");
    setColor2(!color2);
    setColor(false);
    setColor3(false);
  };

  const handleComplete = () => {
    setInfo("complete");
    setColor3(!color3);
    setColor2(false);
    setColor(false);
  };

  return (
    <main className="md:flex md:justify-center  p-[40px] text-[12px] text-customColor3 font-normal">
      <div className="overflow-hidden rounded-md">
        {posts
          .filter((item) => {
            if (info === "active") {
              return item.isDone === false;
            } else if (info === "complete") {
              return item.isDone === true;
            } else {
              return item;
            }
          })
          .map((post) => (
            <Todo
              setPosts={setPosts}
              dark={dark}
              key={Math.random() * Math.random()}
              post={post}
              posts={posts}
            />
          ))}

        {dark ? (
          <div className=" md:min-w-[540px]    bg-background rounded-md shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between p-[20px]">
            <h3>{posts.length} items left</h3>
            <h3
              onClick={handleClear}
              className="cursor-pointer hover:text-customColor3"
            >
              Clear Completed
            </h3>
          </div>
        ) : (
          <div className="md:min-w-[540px]    bg-customColor rounded-md shadow-lg text-customColor2 text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
            <h3>{posts.length} items left</h3>
            <h3
              onClick={handleClear}
              className="cursor-pointer hover:text-background3"
            >
              Clear Completed
            </h3>
          </div>
        )}
        {dark ? (
          <div className="mt-[16px] font-bold text-[14px] bg-background rounded-md shadow-lg tracking-tighter text-customColor4 leading-normal flex justify-center p-[20px] gap-[19px]">
            <span
              onClick={handleAll}
              className={`${
                color && "text-customColor5 "
              }  hover:text-customColor3 cursor-pointer`}
            >
              All
            </span>
            <span
              onClick={handleActive}
              className={`${
                color2 && "text-customColor5 "
              }  hover:text-customColor3 cursor-pointer`}
            >
              Active
            </span>
            <span
              onClick={handleComplete}
              className={`${
                color3 && "text-customColor5 "
              }  hover:text-customColor3 cursor-pointer`}
            >
              Completed
            </span>
          </div>
        ) : (
          <div className="mt-[16px]  text-[14px] bg-customColor rounded-md shadow-lg tracking-tighter text-customColor2 leading-normal flex justify-center p-[20px] gap-[19px] font-bold">
            <span
              className={`${
                color && "text-customColor5 "
              }  hover:text-background3 cursor-pointer`}
              onClick={handleAll}
            >
              All
            </span>

            <span
              className={`${
                color2 && "text-customColor5 "
              }  hover:text-background3 cursor-pointer`}
              onClick={handleActive}
            >
              Active
            </span>
            <span
              className={`${
                color3 && "text-customColor5 "
              }  hover:text-background3 cursor-pointer`}
              onClick={handleComplete}
            >
              Completed
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
