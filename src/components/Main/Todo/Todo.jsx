/* eslint-disable react/prop-types */
const Todo = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default Todo;
