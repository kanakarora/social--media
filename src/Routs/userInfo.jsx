import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import { PostListOperations } from "../components/store/post-list-store";
import Post from "./post";


 const UserInfo = () =>{
    const {userId}  = useParams();
    
    const [userPosts,setUserPosts] = useState(null); 
    const [fetching,setFetching] = useState(false);
    const [noPostsMessage,setNoPostsMessage] = useState(false);

   const {Posts} = useContext(PostListOperations);
 
   useEffect(()=>{
    try{
     if(Posts && Posts.length>0){
        
        const filterdPosts = Posts.filter(post=>{
         return post.userId.toString()===userId})
         if(filterdPosts && filterdPosts.length>0){
          setFetching(true);
          setUserPosts(filterdPosts);
          setFetching(false);
          setNoPostsMessage(false);
         }
        else{
          setNoPostsMessage(true)
        }

     }
    }
    catch(err){
      alert(err.message);
    }
   },[])

//    const showUserPosts = () =>{
//     if(userPosts &&){
//       userPosts.map(post=>{
//         return <Post key={post.id} post = {post}/>
//     })
//   }
//   else if(noPostsMessage){
//     return <p>This user not created any post</p>
// }
//    }
  

   return (<>
     {fetching?<Loading/>:
     <div className="container text-center">
      <div className="row">
     {userPosts && !noPostsMessage ? userPosts.map(post=>{
      return <Post key={post.id} post = {post}/> 
      
     }) :  <center style={{fontSize:"50px",marginTop:"7vw"}}>***this user have no posts ***</center>
    }
   

    </div>
   </div>
   }
   
   </>)
}



 export default UserInfo;