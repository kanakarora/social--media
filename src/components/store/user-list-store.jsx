
import { createContext, useReducer, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
export const UserListOperations = createContext({
    users: [],
    signUpUser: () => {},
    addUser: () => {},
    removeUser: () => {},
})

const ACTIONS = {
    SIGN_UP: "SIGN_UP",
    ADD_USER: "ADD_USER",
    REMOVE_USER: "REMOVE_USER",
    SHOW_USERS: "SHOW_USERS"
}
const reducer = (users, action) => {

    let userList = users;
    const getUserList = localStorage.getItem('userList');
    
    const getLoggedUsers = localStorage.getItem('loggedUsersList');
    if (action.type === ACTIONS.SIGN_UP) {
        const {Newuser} = action.payload;
        console.log(Newuser);
        try {
            if (getUserList) {
                userList = JSON.parse(localStorage.getItem('userList'))
              userList.push(action.payload);
            localStorage.setItem('userList', JSON.stringify(userList)
            )} 
          
        }
        catch (error) {
            console.log("error::", error)
        }
    }
    if (action.type === ACTIONS.ADD_USER) {
        const { signedUpUser, navigate } = action.payload;
        if (getUserList && getLoggedUsers) {
            
            const loggedUsersList = JSON.parse(getLoggedUsers);
            console.log(loggedUsersList);
            userList = JSON.parse(getUserList);
           const LoggedUser = userList.find(user=>{
            return user.Newuser.email === signedUpUser.email && user.Newuser.password === signedUpUser.password
           });
           if(LoggedUser){
            loggedUsersList.push(LoggedUser);
            localStorage.setItem('loggedUsersList',JSON.stringify(loggedUsersList))
            navigate("/")
            
           }
           else{
            alert("invalid credentials check the email and password or add new account");
               
           }
        }

    }

    if(action.type===ACTIONS.REMOVE_USER){
        const {setLoggedUserList,userId,setLogOut,logOut,loggedUserList} = action.payload;
            const UpdatedUsers = loggedUserList.filter(user=>  user.Newuser.userName !== userId)
                 
                  setLoggedUserList(UpdatedUsers);
            localStorage.setItem("loggedUsersList",JSON.stringify(UpdatedUsers));
            
            setLogOut(true);
            if(logOut){
               alert(" come soon");
             }
        }
    }




const Userprovider = ({ children }) => {
    const navigate = useNavigate();
    const [loggedUserList, setLoggedUserList] = useState([]);
    // const [loginMessage,setLogginMessage] = useState(false);
    const [users, dispatch] = useReducer(reducer, []);
    const [logOut,setLogOut] = useState(false);


    const signUpUser = (Newuser) => {
        dispatch({
            type: ACTIONS.SIGN_UP,
            payload: {
                Newuser: Newuser
            }
        })
    }
    const addUser = (signedUpUser) => {
        dispatch({
            type: ACTIONS.ADD_USER,
            payload: { signedUpUser, navigate}
        })
    }
    const removeUser = (userId) => {
        dispatch({
            type: ACTIONS.REMOVE_USER,
            payload: {
               setLoggedUserList,userId,setLogOut,logOut,loggedUserList
            }
        })
        
    }

    const handleUserList = () => {
        const newUserList = JSON.parse(localStorage.getItem('loggedUsersList'));
        if (newUserList) {
            console.log(newUserList);
            setLoggedUserList(newUserList);
        }
      
        return true;
    }
    useEffect(() => {
        localStorage.setItem("userList", JSON.stringify([]));
    }, [])
    // 1st new step
    useEffect(() => {
        localStorage.setItem("loggedUsersList", JSON.stringify([]));
    },[])

    
    return (
        <UserListOperations.Provider value={{ loggedUserList, users, addUser, removeUser, handleUserList, signUpUser }}>
            {children}
        </UserListOperations.Provider>
    )
}
export default Userprovider;