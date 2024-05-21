import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import  "../styles/App.css";
import {Link} from "react-router-dom"

import { Outlet } from "react-router-dom";


const Header = ({changeToggler,selectedTab}) =>{
  

    return(
     <div className="header">
    <header className="p-3  bg-dark text-primary ">
    <div  style={{marginLeft:"0px",marginRight:"10px"}} >
      <div className="d-flex flex-wrap align-items-center justify-content-between ">
      

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <span onClick={changeToggler} style={{fontSize:"1.5em",marginLeft:"2px",}}><TbLayoutSidebarLeftCollapse />
</span>
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 ">Features</a></li>
          <li><a href="#" className="nav-link px-2 ">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 ">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 ">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search post..." aria-label="Search" />
        </form>

        <div className="text-end">
           <Link to ="/login">
      <button className="btn btn-secondary mx-2">login</button>
          </Link> 
          <Link to="/signup"><button type="button" className="btn btn-warning">Sign-up</button></Link>
          
         
      
       
       </div>
    
  </div>
        </div>
     </header>
 
 <Outlet/>
  </div>
    )

}
export default Header;

