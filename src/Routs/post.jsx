import { MdDelete } from "react-icons/md";
import { PostListOperations } from "../components/store/post-list-store";
import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { IoMdHeartEmpty } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  FaThumbsUp, FaThumbsDown ,FaRegThumbsUp , FaRegThumbsDown   } from "react-icons/fa6";
import { } from "react-icons/fa6";

const Post = ({post}) =>{
 
  const {deletePost} = useContext(PostListOperations);
  
  const [likes,setLikes] = useState(post.reactions.likes);
  const [disLikes,setDisLikes] = useState(post.reactions.dislikes);
   
  const [likeBtn,setLikeBtn] = useState(false) ;
  const [dislikeBtn , setDisLikeBtn] = useState(false);

 
  const handleLikes = () =>{
    
    if(likeBtn === false){
      setLikeBtn(true);
      setLikes(likes=>likes+1)
    }

    else {
       
       setLikeBtn(false);
      setLikes (likes => likes-1)
    }
  }

  const handleDisLikes = () =>{
 
   if(dislikeBtn === false){
    setDisLikeBtn(true);
      setDisLikes(disLikes=>disLikes+1);
    }
    else{
        setDisLikeBtn(false);
      setDisLikes(disLikes => disLikes-1);
    }
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

      
        
       <div className="my-2 w-100">
       <span className="mx-0 mt-0" onClick={handleLikes}>
       { likeBtn ? <FaThumbsUp style={{fontSize:"30px"}}/> : <FaRegThumbsUp style={{fontSize:"30px"}}/> }
        </span>
       <span style={{fontSize:"20px"}}>{likes}</span>
        <span className="mx-1 mt-0" onClick={handleDisLikes}>{ dislikeBtn ?<FaThumbsDown style={{fontSize:"30px"}} /> :<FaRegThumbsDown style={{fontSize:"30px"}}/>}</span>
       
        <span style={{fontSize:"20px"}}>{disLikes}</span>
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