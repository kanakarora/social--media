import { useContext, useState } from "react"
import { UserListOperations } from "../components/store/user-list-store"
import User from "./user"
const UserList = () => {
    const { loggedUserList } = useContext(UserListOperations)
       
    return (
        <>
        {loggedUserList && loggedUserList.length>0?
          (<ul >
            {loggedUserList.map((user) => {
                return (
                    <User key={user.id} {...user} />
       )
            }
            )}


        </ul>
          ) : <div className="w-50  mx-auto text-center my-5">
            <h1 >no users found !!!!! </h1>
            <h3>create account</h3>
          </div>
        }
</>
    )
}
export default UserList;