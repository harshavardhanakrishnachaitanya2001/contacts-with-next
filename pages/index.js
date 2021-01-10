  import React, {useState} from 'react';
  import styles from '../styles/Home.module.css'
  export default function ContactInfo(){
    const [details,setDetails]=useState({
      name:'',
      adress:'',
      email:'',
      phone:'',
      dob:''
    });
    function handleNameChange(event){
      setDetails({name:event.target.value})
    }
    function handleAdressChange(event){
      setDetails({adress:event.target.value});
    }
    function handleEmailChange(event){
      setDetails({email:event.target.value})
    }
    function handlePhoneNumberChange(event){
      setDetails({phone:event.target.value})
    }
    function handleDOBChange(event){
      setDetails({dob:event.target.value})
    }
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact information</h1>
        <form>
          <label>Name: <input type="text" placeholder="Name" value={details.name} onChange={handleNameChange}/></label><br />
          <label>Address: <input type="text" placeholder="Adress" value={details.adress} onChange={handleAdressChange}/></label><br />
          <label>Email: <input type="email" placeholder="E-mail" value={details.email} onChange={handleEmailChange}/></label><br />
          <label>Phone: <input type="text" placeholder="Phone" value={details.phone} onChange={handlePhoneNumberChange}/></label><br />
          <label>Date of birth: <input type="date" value={details.dob} onChange={handleDOBChange}/></label><br />
          <button id="clickToDisplay">OK</button>
        </form>
        {details.name}
        {details.dob}
      </div>
    )
}
