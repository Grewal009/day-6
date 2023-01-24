import { useEffect, useState } from "react";


const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnLine = () => {
            setIsOnline(true);
        };
    
        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnLine);
        window.addEventListener("offline", handleOffline);

        return() => {
            window.removeEventListener("online", handleOnLine);
            window.removeEventListener("offline", handleOffline);
        }

    }, []);
    return isOnline;
}

export default useOnline;