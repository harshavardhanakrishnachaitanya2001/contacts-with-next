import React,{useState} from 'react'
import styles from '../styles/ContactDetails.module.css'
import Link from 'next/link'
export default function contactDetails(){
  //Start of hooks

  let [userName,setUserName]=useState('');
  let [userAge,setUserAge]=useState();
  let [userEmail,setUserEmail]=useState();
  let [userPhone,setUserPhone]=useState();
  let [userDob,setUserDob]=useState();
  const[details,setDetails]=useState({});

  //End of hooks

  //Start of user defined functions

  function handleNameChange(e){
    e.preventDefault;
    setUserName(e.target.value);
  }

  function handleAgeChange(e){
    e.preventDefault();
    setUserAge(e.target.value)
  }

  function handleEmailChange(e){
    e.preventDefault();
    setUserEmail(e.target.value)
  }

  function handleDobChange(e){
    e.preventDefault();
    setUserDob(e.target.value)
  }

  function handlePhoneChange(e){
    e.preventDefault();
    setUserPhone(e.target.value)
  }

  function storeDetails(e){
    e.preventDefault();
    setDetails({
      name:userName,
      age:userAge,
      email:userEmail,
      phone:userPhone,
      dob:userDob
    })
  }

  //End of user defined functions
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact details</h1>
      <label>Name: </label>
      <input type="text" onChange={handleNameChange} value={userName} placeholder="Name"/><br />
      <label>Age: </label>
      <input type="number" value={userAge} onChange={handleAgeChange} placeholder="age"/><br />
      <label>Email: </label>
      <input type="email" value={userEmail} onChange={handleEmailChange} placeholder="johangreeshum@gmail.com"/><br />
      <label>Phone number: </label>
      <input type="tel" value={userPhone} onChange={handlePhoneChange} placeholder="01234 56789"/><br />
      <label>Date of birth </label>
      <input type="date" value={userDob} onChange={handleDobChange}/><br />
      <Link href="/contacts"><button type="button">OK</button></Link>
    </div>
  )
}