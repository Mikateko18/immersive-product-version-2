import React, {useContext} from "react";
import './NavLinks.css';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";


const NavLinks = props =>{

   const auth = useContext(AuthContext);

    return <ul className="nav-links">
       
        {auth.isLoggedIn && (<li>
            <NavLink to={`/${auth.userId}/models`}>My Models</NavLink>
        </li>
        ) 
        }
         {auth.isLoggedIn && (
        <li>
            <NavLink to="/models/new">Add model</NavLink>
        </li>
         ) 
        }
        
        <li>
            <NavLink to="/auth">Contact us</NavLink>
        </li>
        
        
         
        
       
        {auth.isLoggedIn && 
        <li className= "button1">
            <button onClick={auth.logout}>LOGOUT
            </button>
        </li>}
       


    </ul>

};

export default NavLinks;