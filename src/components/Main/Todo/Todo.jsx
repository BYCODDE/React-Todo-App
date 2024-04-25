/* eslint-disable react/prop-types */
const Todo = ({ post }) => {
  return (
    <div className=" border-b-4 border-red-700  bg-background rounded-md shadow-lg tracking-tighter text-customColor4 font-normal leading-normal flex justify-center p-[20px]">
      <p>{post.content}</p>
    </div>
  );
};

export default Todo;
