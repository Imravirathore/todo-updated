import React, { useState } from 'react'

interface formData {
    username:string;
    password:string
}

const Form = () => {

    const [userData , setUserData] = useState({
        name: '',
        password:''
    })

    // Handle Change
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log('user data', name, value)

        setUserData({  ...userData, [e.target.name]: e.target.value
        })

    }
    

    // OnSubmit
const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();   
    // console.log('user data', userData)
    console.log('user data', userData)

}


  return (
    <>
          <h1> Form Example</h1>

          <form onSubmit={handleSubmit}>
                <label>User Name </label>
                <input type="text" 
                placeholder='enter user name' 
                value={userData.name} 
                onChange={handleChange} 
                name='name'
                />
    <br/>
                <label>password Name </label>
                <input 
                type="password"
                 placeholder='enter password'
                 value={userData.password}
                onChange={handleChange}
                name='password'
                 />
                <br/>

                <button type='submit'>Submit</button>
          </form>
    </>
  )
}

export default Form