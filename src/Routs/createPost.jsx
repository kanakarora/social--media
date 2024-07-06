import { useContext, useRef } from "react";
import { PostListOperations } from "../components/store/post-list-store";
import {useNavigate} from "react-router-dom";
const CreatePost = () =>{
  const {addPost} = useContext(PostListOperations);

   const navigate = useNavigate();

    const SignupNavigate = ()=>{
      navigate("signup")
    }
     const userIdElement = useRef();
     const postTitleElement = useRef();
     const postBodyElement = useRef();
     const tagsElement = useRef();

     const handleSubmit = (e)=>{
        e.preventDefault();
      const userId = userIdElement.current.value;
       const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
       const tags = tagsElement.current.value.split(" ");
       
       let loggedUserList = localStorage.getItem('loggedUsersList');
       
       
       if(loggedUserList){
       const getLoggedUserList = JSON.parse(localStorage.getItem('loggedUsersList'));
     
       
       if (getLoggedUserList.length>0) {getLoggedUserList.map(user=>{
            if (user.Newuser.userName === userId){
           
            addPost(userId,postTitle,postBody,tags);
            navigate("/")
             }
          else{
            alert("you have not created an account or logged in");
          
            } 
        })
      }
      else {
        alert ("create account to make posts");
      }
       }
     
       
        userIdElement.current.value = '';
        postTitleElement.current.value = '';
        postBodyElement.current.value = '';
       tagsElement.current.value = '';

  
       
     
     }

    return(
    <div className="  form-container mt-5">
    <form className=" text-primary p-3" onSubmit={handleSubmit}>
    <div className="form-group">
      
      <label htmlFor="userId">Enter your user Name here</label>
      <input ref={userIdElement} type="text" className="form-control text-light " id="userId" aria-describedby="emailHelp" placeholder="Enter userId here" required/>
      
    </div>
    <div className="form-group ">
      <label htmlFor="title">Post Title</label>
      <input ref={postTitleElement} type="text" className="form-control " id="title" placeholder="How are you feeling today" required/>
    </div>
    
    <div className="form-group ">
      <label htmlFor="postContent">Post Content</label>
      <textarea ref={postBodyElement} type="text" className="form-control " rows="4" id="postContent" placeholder="describe your post" required/>
    </div>
   
    <div className="form-group ">
      <label htmlFor="tags">Enter your hashtags here</label>
      <input ref={tagsElement} type="text" className="form-control " id="tags" placeholder="tags" required/>
      <small>please put space between tags</small>
    </div>
    
    <button type="submit" className="btn btn-primary submit">Post</button>
  </form>
  </div>
    )
}
export default CreatePost;