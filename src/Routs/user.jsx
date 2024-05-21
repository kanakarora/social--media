import { useContext } from "react";
import "../styles/userCard.css";
import {Link} from "react-router-dom";
import { UserListOperations } from "../components/store/user-list-store";
const User = ({user}) =>{
    console.log(user);
  const {removeUser} = useContext(UserListOperations);
    const handleLogOut=(userId)=>{
        removeUser(userId)
       
    }

    try{
        return (
            <div className="contact-card bg-primary py-2 px-4 mx-auto my-2">
            <img className="w-25 rounded" src="images/OIP.jpg" alt="profile" />
            <div className="user-details">
                <p>{user.Newuser.userName}</p>
                <p>{user.Newuser.email}</p>
                <Link to={`/usersList/${user.Newuser.userName}`} className="text-light">view posts</Link>
                <button type="button" onClick={()=>{handleLogOut(user.Newuser.userName)}}>LogOut</button>
            </div>
        </div>
    )}
    catch(error){
        console.log(error);
    }
    
    
}
export default User;