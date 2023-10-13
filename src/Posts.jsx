import React, { useContext, useState } from "react";
import { PostsContext } from "./PostContext";
import Post from "./components/Post";

function Posts() {
  const [posts, setPosts] = useContext(PostsContext);
  const [curPage, setCurPage] = useState(1);
  const postPerPage = 6;
  const totalPage = Math.floor(posts.length / 6 + 1);
  const lastPostIndex = curPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const curPosts =
    posts.length > 0 ? posts.slice(firstPostIndex, lastPostIndex) : [];
  function nextPage() {
    if (curPage == totalPage) return;
    setCurPage((prev) => prev + 1);
  }
  function prevPage() {
    if (curPage == 1) return;
    setCurPage((prev) => prev - 1);
  }
  function goToPage(page) {
    setCurPage(+page);
  }
  return (
    <div className="w-full h-max bg-slate-300 flex-col items bg-center justify-center p-6">
      <div className="flex items-start justify-center flex-wrap w-full h-full">
        {curPosts.length > 0 &&
          curPosts.map((post) => (
            <Post key={post.id} post={post} setPosts={setPosts} />
          ))}
      </div>
      <div className="flex items-center justify-center h-10 w-40 mx-auto my-2">
        {curPage > 1 && (
          <button
            className="outline-none border-none text-gray-500 hover:text-gray-600"
            onClick={prevPage}
          >
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
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}{" "}
        <div
          className="flex items-center justify-center bg-pink-400 rounded-full h-8 w-8 text-center m-1 cursor-pointer"
          onClick={() => goToPage(curPage)}
        >
          <p>{curPage}</p>
        </div>
        {curPage < totalPage && (
          <div
            className="flex items-center justify-center bg-gray-400 rounded-full h-8 w-8 text-center m-1 cursor-pointer"
            onClick={() => goToPage(curPage + 1)}
          >
            <p>{curPage + 1}</p>
          </div>
        )}
        {curPage < totalPage - 1 && (
          <div
            className="flex items-center justify-center bg-gray-400 rounded-full h-8 w-8 text-center m-1 cursor-pointer"
            onClick={() => goToPage(curPage + 2)}
          >
            <p>{curPage + 2}</p>
          </div>
        )}
        <button
          className="outline-none border-none text-gray-500 hover:text-gray-600 cursor-pointer"
          onClick={nextPage}
        >
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
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Posts;
