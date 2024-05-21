import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import { PostListOperations } from "../components/store/post-list-store";
import Post from "./post";


 const UserInfo = () =>{
    const {userId}  = useParams();
    
    const [userPosts,setUserPosts] = useState([]); 
    const [fetching,setFetching] = useState(false);
   const {Posts} = useContext(PostListOperations);
 
   useEffect(()=>{
     setFetching(true);
     try{
     if(Posts && Posts.length>0){
       const filterdPosts = Posts.filter(post=>{
         return post.userId.toString()===userId})
         setUserPosts(filterdPosts);
         console.log(filterdPosts);
         setFetching(false);
     }
    }
    catch(err){
      alert(err.message);
    }
   },[])
   console.log(userPosts);

   return (<>
     {fetching?<Loading/>:
     <div className="container text-center">
      <div className="row">
     {userPosts.map(post=>{
      return <Post key={post.id} post = {post}/> 
     
     })
    }
    </div>
   </div>
   }
   
   </>)
}



 export default UserInfo;