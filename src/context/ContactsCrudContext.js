import {createContext, useContext ,useState } from 'react';
import { uuid } from 'uuidv4';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({children}){

    const [contacts,setContacts] = useState([]);
    

     //CREATE
     const addContactHandler = async(contact)=>{
        
        fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        body:JSON.stringify({
            id: uuid(),
            ...contact
            // name : contact.name,
            // email: contact.email
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
        })
            .then(res=>res.json())
            .then(data=>setContacts([...contacts,data]))

           
     };



    // READ
    const retrieveContacts = async()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setContacts(data);
        })
        .catch(()=>{
            console.log("error here");
        });
    };

    //UPDATE
    const editContactHandler = async(contact)=>{
        
        fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`,{
        method:'PUT',
        body:JSON.stringify({
            id: contact.id,
            ...contact,
            // name : contact.name,
            // email: contact.email
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8",
        },
        })
            .then(res=>res.json())
            .then(data=>setContacts(
                contacts.map((contact)=>{
                        return contact.id === data ? {...data} : contact;
                })
            ))
    }


   

     //DELETE
    const deleteContactHandler=async(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users${id}`,{
            method:'DELETE'
        })
        const newContactList=contacts.filter((contact)=>{
            return contact.id!==id;
        });
        setContacts(newContactList);
    }

    const value = {
        
        contacts,
        retrieveContacts,
        deleteContactHandler,
        addContactHandler,
        editContactHandler,
    }

    
        return <contactsCrudContext.Provider value={value}>
            {children}
            </contactsCrudContext.Provider>
}

export function useContactsCrud(){
    return useContext(contactsCrudContext);
}