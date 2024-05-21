import { useState,useContext } from "react"

import "../styles/App.css";
import { Link } from "react-router-dom";
import { UserListOperations } from "./store/user-list-store";

const SideBar = ({toggler,selectedTab,setSelectedTab}) =>{
    const {handleUserList} = useContext(UserListOperations)
  return <>
 {toggler && (
     <>
     <div className={`sideBar d-flex flex-column flex-shrink-0  p-3 text-bg-dark` } >
      
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" onClick={()=>setSelectedTab("home")} className={`nav-link ${selectedTab ==="home" && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
      
    
        <li>
          <Link to="/createpost" onClick={()=>setSelectedTab("create post")} className={`nav-link ${selectedTab === "create post" && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            create post
          </Link>
        </li>
        <li>
          <Link to="/usersList" onClick={()=>{setSelectedTab("users"); handleUserList();}} className={`nav-link ${selectedTab === "users" && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            users
          </Link>
        </li>
       
        
      </ul>
      <hr/>
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         
          <strong>go above</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
    </>
     )}
  
   </> 
}
export default SideBar