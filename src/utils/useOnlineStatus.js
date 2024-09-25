import { useState } from "react";
import { useEffect } from "react"

// is it mandatory to use (use before hooks) === No , You can use anything, but to know that it is a hook, we use 'use' before the hook

const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(true)
    // check if user is online

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
            console.log("You are offline.");
        });
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
            console.log("You are now connected to the network.");
        });
    },[])
    
    return onlineStatus   
}
export default useOnlineStatus


// Code splitting / chunking / dynamic bundling    