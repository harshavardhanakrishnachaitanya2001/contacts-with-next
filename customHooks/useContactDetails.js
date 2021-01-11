import React, {useState} from 'react'
export default function useContactDetails(callBack){
    const [inputs,setInputs]=useState({});
    function handleSubmit(event){
        if(event){
            event.preventDefault();
        }
    }
    function handleInputs(event){
        event.persist();
        setInputs(inputs=>({...inputs, [event.target.name]:event.target.value}));
    }
    return {
        handleSubmit,
        handleInputs,
        inputs
    };
}
