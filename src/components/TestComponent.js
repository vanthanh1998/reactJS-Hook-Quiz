import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const TestComponent = () => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Van Thanh", age: 15 },
            { id: 2, name: "Thanhrain", age: 28 },
            { id: 3, name: "Foxrainsad", age: 30 }
        ]
    );
    const handleAddNewUSer = (object) => {
        setListUsers([object, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return(
        <>
            <AddUserInfo
                handleAddNewUSer= {handleAddNewUSer}
            />
            <br /><br />
            <DisplayInfo 
                listUsers={listUsers} 
                handleDeleteUser={handleDeleteUser}
            />
        </>
    )
  }
  
  export default TestComponent;
  