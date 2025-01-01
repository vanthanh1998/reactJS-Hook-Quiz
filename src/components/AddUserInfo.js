import React, { useState } from "react";


const AddUserInfo = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('VietNam');
    const [age, setAge] = useState('');

    const handleOnChangeName = (event) =>{
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) =>{
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        props.handleAddNewUSer({
            id: Math.floor((Math.random()*100) + 1) + " random",
            name,
            age
        });
        
    }

    return(
        <div>
            Thanhrain
            My name is {name}

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => handleOnChangeName(event)}>
                </input>
                <label>Age</label>
                <input type="text" 
                    value={age} 
                    onChange={(event) => handleOnChangeAge(event)}></input>
                <button>Submit</button>
            </form>

        </div>
    )
}

  
  export default AddUserInfo;
  