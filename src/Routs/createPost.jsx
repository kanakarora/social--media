import { useContext, useRef } from "react";
import { PostListOperations } from "../components/store/post-list-store";
import {useNavigate} from "react-router-dom";
const CreatePost = () =>{
  const {addPost} = useContext(PostListOperations);

   const navigate = useNavigate();
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
       console.log(loggedUserList);
       
       if(loggedUserList){
       const getLoggedUserList = JSON.parse(localStorage.getItem('loggedUsersList'));
       console.log(getLoggedUserList);
       
        getLoggedUserList.map(user=>{
            if (user.Newuser.userName === userId){
            try{
              
            addPost(userId,postTitle,postBody,tags);
            navigate("/")
            }
            catch(err){
              console.log(err);
            }
            
              }
          else if (getLoggedUserList.length === 0 || user.Newuser.userName !== userId){
            alert("you have not created an account");
            navigate("/signup");
            
           }
        })
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
      <input ref={userIdElement} type="text" className="form-control text-light " id="userId" aria-describedby="emailHelp" placeholder="Enter userId here"/>
      
    </div>
    <div className="form-group ">
      <label htmlFor="title">Post Title</label>
      <input ref={postTitleElement} type="text" className="form-control " id="title" placeholder="How are you feeling today"/>
    </div>
    
    <div className="form-group ">
      <label htmlFor="postContent">Post Content</label>
      <textarea ref={postBodyElement} type="text" className="form-control " rows="4" id="postContent" placeholder="describe your post"/>
    </div>
   
    <div className="form-group ">
      <label htmlFor="tags">Enter your hashtags here</label>
      <input ref={tagsElement} type="text" className="form-control " id="tags" placeholder="tags"/>
      <small>please put space between tags</small>
    </div>
    
    <button type="submit" className="btn btn-primary submit">Post</button>
  </form>
  </div>
    )
}
export default CreatePost;