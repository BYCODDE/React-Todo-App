/* eslint-disable react/prop-types */

import { useState } from "react";
import Todo from "./Todo/Todo";

export default function Main({ dark, posts, setPosts }) {
  const [info, setInfo] = useState("all");

  const handleClear = () => {
    const updatedPosts = posts.filter((post) => !post.isDone);
    setPosts(updatedPosts);
  };

  const handleAll = () => {
    setInfo("all");
    
  };
  const handleActive = () => {
    setInfo("active");
  };

  const handleComplete = () => {
    setInfo("complete");
  };

  return (
    <main className="p-[40px] text-[12px] text-customColor3 font-normal">
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
          <div className="bg-background rounded-md shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between p-[20px]">
            <h3>{posts.length} items left</h3>
            <h3
              onClick={handleClear}
              className="cursor-pointer hover:text-customColor3"
            >
              Clear Completed
            </h3>
          </div>
        ) : (
          <div className="bg-customColor rounded-md shadow-lg text-customColor2 text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
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
              className="hover:text-customColor3 cursor-pointer"
            >
              All
            </span>
            <span
              onClick={handleActive}
              className="hover:text-customColor3 cursor-pointer"
            >
              Active
            </span>
            <span
              onClick={handleComplete}
              className="hover:text-customColor3 cursor-pointer"
            >
              Completed
            </span>
          </div>
        ) : (
          <div className="mt-[16px]  text-[14px] bg-customColor rounded-md shadow-lg tracking-tighter text-customColor2 leading-normal flex justify-center p-[20px] gap-[19px] font-bold">
            <span className="hover:text-background3 cursor-pointer">All</span>
            <span className="hover:text-background3 cursor-pointer">
              Active
            </span>
            <span className="hover:text-background3 cursor-pointer">
              Completed
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
