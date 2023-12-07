import React, { useState, useEffect } from "react";
import './userdata.css'


const UserData = () => {
    
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    


    useEffect(() => {
        
        setLoading(true)
        setError(null)
     fetch(`https://jsonplaceholder.typicode.com/users/${count + 1}`)

            .then(response => {
                if (!response.ok)
                {
                    throw new Error("network response was not ok")
                }
                return response.json()
            })
            .then(data => {
            
                setUser(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
        })

    }, [count])

    return (
          <div className="usage-item">
            <button onClick={() => setCount(count + 1)}>Increment</button>

        <div className="userdata">
         
            {user && (
                
                    <div className="userinform">
                        

                    <h2>User information</h2>
                    <p>Name:{user.name}</p>
                     <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
                )}
                </div>
          
            <button onClick={() => setCount(count - 1)}>Decrement</button>
             <div className="count">
                    <h1>Counter :{count}</h1>
            </div>
                <div>
            {loading && <p> loading</p>}
                    {error && <p>Error {error.message} </p>}
                    </div>
                

            
        </div>
    )
    





}

export default UserData