import react from 'react';

const ContactCard =(props)=>{

    const{id,name,email}=props.contact; //destructering

    return(
        <div className="item" >
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color:"red",marginTop:"10px"}}></i>
        </div>
    );
};
export default ContactCard;