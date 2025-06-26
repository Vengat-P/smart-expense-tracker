import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext();
const UserProvider = ({children}) => {
    const [data,setData]= useState(()=>{
        const storedData = localStorage.getItem("data")
        return storedData ? JSON.parse(storedData) : []
    });
    const [formData,setFormData] = useState({
        detail:"",
        amount: "",
        category:"",
        date:"",
        note:"",
        })
    useEffect(()=>{

    },[data])

    return (
        <userContext.Provider value={{data,setData,formData,setFormData}}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;