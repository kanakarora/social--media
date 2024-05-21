import { createContext,  useReducer, useState } from "react";


export const PostListOperations = createContext({
  Posts: [],
  addPost: () => {},
  deletePost: () => {},
  fetchData: () => {},
  
 
});

const postListReducer = (Posts, action) => {
  let newPostList = Posts;
  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.fetchedPosts;
    
  }
 else if (action.type === "DELETE_POST") {
    newPostList = Posts.filter((post) => post.id !== action.payload.postId);
  }

 else if (action.type === "ADD_POST") {
  console.log(action.payload);
 
  newPostList.push(action.payload);

  console.log("post created")

} 
   
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [Posts, dispatchPostList] = useReducer(postListReducer, []);
  const [searchPost,setSearchPost] = useState(""); 
 
  const addPost = (userId, postTitle, postBody,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId:userId,
       reactions:0,
        tags: tags,
      },
    });
  };

 

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

 const addInitialPosts = (fetchedPosts)=>{
  dispatchPostList({type:"ADD_INITIAL_POSTS",payload:{fetchedPosts}})
 }




  return (
    <PostListOperations.Provider
      value={{ Posts, addPost, deletePost,addInitialPosts,searchPost,setSearchPost}}
    >
      {children}
    </PostListOperations.Provider>
  );
};

export default PostListProvider;

