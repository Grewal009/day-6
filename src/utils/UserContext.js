import { createContext } from "react";


const UserContext = createContext({
    user : {
        name : "Dummy name",
        email : "dummy@email.com",
    }
});

export default UserContext;