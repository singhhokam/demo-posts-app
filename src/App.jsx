import axios from "axios";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import Post from "./components/Post";
import { PostsContext, PostsContextProvider } from "./PostContext";
import Posts from "./Posts";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";
axios.defaults.withCredentials = true;
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-slate-300">
          <div className="flex items-center justify-center flex-wrap w-full h-full">
            <p className="text-2xl font-bold">Loading...</p>
          </div>
        </div>
      ) : (
        <PostsContextProvider>
          <Posts />
        </PostsContextProvider>
      )}
    </>
  );
}

export default App;
