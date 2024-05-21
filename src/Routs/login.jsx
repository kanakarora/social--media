import React, { useEffect } from "react";


import "../styles/App.css";
import { useContext } from "react";
import { UserListOperations } from "../components/store/user-list-store";
import { useForm } from "react-hook-form";


function Login(){
  
  const{register,handleSubmit,reset,formState:{errors}}=useForm();
  const {addUser} =useContext(UserListOperations) ;
 
  const handleLogin = (signedUpUser) =>{
      addUser(signedUpUser);
      reset();
     
       
  }

  
  return(
    <>
     <form onSubmit={handleSubmit(handleLogin)}>
   <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
     <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" {...register("email",{required:"fill this field"})}/>
     {errors.email && <p style={{fontSize:"20px" , color:"red"}}>{errors.email.message}</p>  }
   </div>
     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   
   <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input name ="password"  type="password" className="form-control" id="exampleInputPassword1" {...register("password",{required:true})}/>
     {errors.password && <p style={{fontSize:"20px", color:"red"}}>{errors.password.type === "required"?"fill this field":"invalid password"}</p>  }
   </div>

   <button type="submit" className="btn btn-primary">Submit</button>
   
 </form>

  
    </>
  )
}
export default Login;