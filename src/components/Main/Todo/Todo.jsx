/* eslint-disable react/prop-types */

import X from "/images/X.svg";
const Todo = ({ post, dark, posts, setPosts }) => {
  const handleDelete = () => {
    const clone = posts;
    const deleteIndex = clone.findIndex((item) => item.id === post.id);
    clone.splice(deleteIndex, 1);
    setPosts([...clone]);
  };

  const handleComplete = () => {
    // const completeIndex = posts.findIndex((item) => item.id === post.id);
    // console.log(completeIndex);
    // console.log(post.isDone);
    const parentDiv = event.target.parentNode;
    const childDiv = parentDiv.querySelector("div");
    const childP = parentDiv.querySelector("p");
    console.log(childP);
    childDiv.style.boxShadow = "none";
    childDiv.style.height = "20px";
    childDiv.style.width = "20px";
    childDiv.style.borderRadius = "50%";
    childDiv.style.background = "linear-gradient(to right, #55DDFF, #C058F3)";
    childP.style.textDecorationLine = "line-through";
    childP.style.fontWeight = "400";
    childP.classList.add("custom-text-color");
  };

  return (
    <>
      {dark ? (
        <div className="text-[12px]   border-b border-background3 border-solid bg-background  shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-between p-[20px]">
          <div
            onClick={handleComplete}
            className="complete shadow-custom  h-[20px] w-[20px] rounded-[50%]  cursor-pointer"
          >
            
          </div>

          {/* <div className=" shadow-none h-[20px] w-[20px] rounded-[50%] bg-gradient-to-r from-background4 to-background5"></div> */}

          <p className="text-customColor3 text-[14px] font-normal leading-normal tracking-tighter">
            {post.content}
          </p>
          <img
            onClick={handleDelete}
            className="w-[17px] h-[17px]  cursor-pointer"
            src={X}
            alt="delete_svg"
          />
        </div>
      ) : (
        <div className=" border-b border-customColor6 border-solid bg-customColor  shadow-lg text-customColor2 text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
          <div className="shadow-customColor2 h-[20px] w-[20px] rounded-[50%] bg-customColor cursor-pointer"></div>

          {/* <div className="shadow-none h-[20px] w-[20px] rounded-[50%] bg-gradient-to-r from-background4 to-background5 cursor-pointer"></div> */}

          <p className="text-customColor3 text-[14px] font-normal leading-normal tracking-tighter">
            {post.content}
          </p>
          <img
            onClick={handleDelete}
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
