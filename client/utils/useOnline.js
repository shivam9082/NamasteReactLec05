
import {useEffect, useState} from "react";


/**
 * in the below code there is also a need of removing an event listener...
 * which is done at he end of useEffect hook.
 * why do we remove eventlistener.. bcoz browser keeps on calling eventListener...
 */

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(navigator.onLine);

   
    
    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }
    
        const handleOffline = () => {
            setIsOnline(false);
        }
    
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

       return () => {
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
       }
    } ,[]);

    return isOnline;

};

export default useOnline;