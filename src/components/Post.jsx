import React, { useEffect, useState } from "react";

function Post({ post, setPosts }) {
  const [delPost, setDelPost] = useState(null);
  useEffect(() => {
    if (!delPost) return;
    setPosts((prev) => prev.filter((p) => p.id != delPost));
  }, [delPost]);
  function deletePost() {
    setDelPost(post.id);
  }
  return (
    <div className="relative w-[450px] h-[350px] flex-col items-start justify-center p-5 gap-1 m-6 bg-white shadow-md">
      <button className="absolute top-0 right-0 p-1" onClick={deletePost}>
        <span className=" text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </button>
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
}

export default Post;
