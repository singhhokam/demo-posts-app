import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const PostsContext = createContext([]);

export function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (posts.length == 0) {
      axios
        .get("/")
        .then(({ data }) => {
          console.log(JSON.stringify(posts));
          setPosts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <PostsContext.Provider value={[posts, setPosts]}>
      {children}
    </PostsContext.Provider>
  );
}
