import { useContext, useEffect, useState } from "react";
import "../styles/App.css";
import Post from "./post";
import { PostListOperations } from "../components/store/post-list-store";
import WelcomeMsg from "../components/welcomemsg";
import { UserListOperations } from "../components/store/user-list-store";



const PostList = () => {
  const { Posts } = useContext(PostListOperations);
  const {loginMessage} = useContext(UserListOperations)

console.log(Posts);
  try {
    return (
      
      <div className="postList container text-center">
        {loginMessage && <h1>welcome user</h1>}
        <div className="row">
          {Posts && Posts.length === 0 && <WelcomeMsg />}
          {Posts.map((post) => {
            return <Post key={post.id} post={post} />

          })}
        </div>
      </div>
    )
  }
  catch (error) {
    console.log(error);
  }
}


export default PostList;








