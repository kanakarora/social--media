import { useContext, useState } from "react";
import { UserListOperations } from "../components/store/user-list-store";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";




const SignUp = () =>{
    const Navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}} = useForm();
    const {signUpUser} = useContext(UserListOperations);

  const handleSignUp =(data)=>{
    const newUser = {id:uuid(),...data}
    signUpUser(newUser);
     Navigate("/login")

  }
  const validateUserName = (value) =>{
    const userList = JSON.parse(localStorage.getItem("userList"));
    if(userList){
         const existingUser = userList.find(user=>{
         return user.Newuser.userName === value
         })
       return  existingUser?"username not available" : true
    }
  }

  return (
    <>
       
 <form onSubmit={handleSubmit(handleSignUp)}>
 <div className="mb-3">
     <label htmlFor="exampleInputuserName" className="form-label">UserName</label>
     <input  type="text" className="form-control" id="exampleInputuserName" placeholder="enter your username" {...register("userName",{
      required:{
        value:true,
        message:"enter userName"
     },
     validate:validateUserName
       
     })}/>
      <p style={{fontSize:"20px"}} className="text-danger">{errors.userName?.message}</p>
   
   </div>
   <div className="mb-3">
     <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
     <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder = "enter your email"  {...register("email",{required:true})}/>
     {errors.email && <p style={{fontSize:"20px"}} className="text-danger">{errors.email.type ==="required"? "email is required":"plzz enter a valid email address"}</p>}
     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   </div>
   <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input  type="password" className="form-control" id="exampleInputPassword1" placeholder="password must contain 8 digit" {...register("password",{required:true,minLength:6})} />
     {errors.password && <p style={{fontSize:"20px"}} className="text-danger p-0 m-0">{errors.password.type === "required"?"fill this field":"password should include 6 chracter"}</p>}
   </div>
  
   <button type="submit" className="btn btn-primary">Submit</button>
 </form>
   
    </>
  )
}

export default SignUp;