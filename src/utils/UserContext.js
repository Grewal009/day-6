import { createContext } from "react";


const UserContext = createContext({
    user : {
        name : "Aneel",
        email : "aneel@gmail.com",
    }
});

export default UserContext;