import {createContext, useContext ,useState } from 'react';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({children}){

    const [contacts,setContacts] = useState([]);
    const api = "https://jsonplaceholder.typicode.com";

    // RetrieveContacts 
    const retrieveContacts = async()=>{
        const response = await api.get("/users");
        if(response.data) {
            setContacts(response.data);
        }
    }; 

    // const retrieveContacts = async()=>{
    //     const  response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const json = await response.json();
    //     setContacts(json.data);
    // }

    const value = {
        contacts,
        retrieveContacts 
    }

    
        return <contactsCrudContext.Provider value={value}>
            {children}
            </contactsCrudContext.Provider>
}

export function useContactsCrud(){
    return useContext(contactsCrudContext);
}