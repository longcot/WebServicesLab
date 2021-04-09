import React, { useState } from "react";
import linkServer from '../api/linkServer'
// import {signin} from '../action'
// import {connect} from 'react-redux'

//let announce = 'Login to see information'
const Lab4 = (props) => {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [announce,setAnnounce] = useState('Login to see information')

    const fetchInformation = async(name,password) =>{
        try {
            const response = await linkServer.post('/signin',{name,password})
            setAnnounce(`Student ${response.data.username} has account with password: ${response.data.password} and ${response.data.score} scores`)
        } catch (error) {
            setAnnounce(`${error}`)
        }
    }

    return (
      
    <div>
      <h1>Lab4</h1>
      <div className="ui form segment">
        <div className="field">
            <label>Username</label>
            <div className="ui left labeled icon input">
            <input 
                type="text" 
                placeholder="Username" 
                value = {name}
                onChange = {e=>setName(e.target.value)}
            />
        
            </div>
        </div>
        <div className="field">
            <label>Password</label>
            <div className="ui left labeled icon input">
            <input 
                type="password" 
                value ={password}
                onChange= {e=>setPassword(e.target.value)}
            />
            
            </div>
        </div>
        
        <button onClick ={()=>fetchInformation(name,password)} className="ui blue submit button">Login</button>
        </div> 
        <div>
            {announce}
        </div>
    </div>
  );
};

export default Lab4
