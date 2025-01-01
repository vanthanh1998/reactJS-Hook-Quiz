import React, { useEffect, useState } from "react";
import './DisplayInfo.scss'
import Logo from './../logo.svg'

const DisplayInfo = (props) => {
    // props => properties
    const {listUsers} = props

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHide = () => {
        // this.setState({
        //     isShowListUser: !this.state.isShowListUser
        // })


        setShowHideListUser(!isShowHideListUser);
    }


    useEffect( 
        () => {

        },[]
    )  
    
        
    return (
        <div className="div-container-displayinfo">
            <div>
                <button onClick={() => handleShowHide()}>{ isShowHideListUser ? "Show" : "Hide"} list users</button>
            </div>
            {
                isShowHideListUser &&
                <>
                    {listUsers.map((item) => {
                        // + => convert từ string sang number
                        return (
                            <div key={item.id} className={+item.age > 16 ? "red" : "green"} >
                                <div>
                                    <div>My name is { item.name }</div>
                                    <div>My age is { item.age }</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(item.id)} >Delete</button>
                                </div>
                            </div>
                        )
                    } )}
                </>
            }
        </div>
    )
}

export default DisplayInfo;