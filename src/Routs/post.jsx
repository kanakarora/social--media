import { MdDelete } from "react-icons/md";
import { PostListOperations } from "../components/store/post-list-store";
import { useContext, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

// import Lottie from "lottie-react";
// import Reacton from "./reaction.json";

const Post = ({post}) =>{
  
  const {deletePost} = useContext(PostListOperations);
  
  const [reactions,setReactions] = useState(post.reactions);
 

   const handleReactions =()=>{
       setReactions (reactions=>reactions+1)
   }
    return (
     
      <div className="col mt-4 card-content-box">
    
      <div className="card h-100  " style={{width: "18rem"}}>
  
  <div className="card-body overflow-y-auto">
    <h5 className="card-title">{post.title}</h5>
    <h5 className="card-title">{post.userId}</h5>
    <p className="card-text  mb-0">{post.body}</p>
   
        <span onClick={()=>{deletePost(post.id)}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete />
      </span>

      
        
       <div className="my-2 w-25  mx-4 ">
       <span className="mx-1 mt-0" onClick={handleReactions}> <IoMdHeartEmpty style={{fontSize:"30px"}} /></span>
        
        <span style={{fontSize:"20px"}}>{reactions}</span>
        </div>
   
  {post.tags.map(tag=>{
    
    return <span key={tag} className="badge text-bg-primary mx-2">{tag}</span>
    
  })}
      
  </div>
</div>
  </div>
  
   
    ) 
    
  
}
export default Post;