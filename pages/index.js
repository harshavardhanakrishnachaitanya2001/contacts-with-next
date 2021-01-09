import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name,setName]=useState('');
  const [displayName,setDisplayName]=useState('');
  function handleChange(event){
    setName(event.target.value)
  }
  function handleClick(event){
    event.preventDefault();
    setDisplayName(name);
    setName('');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts</title>
      </Head>
      <h1 className={styles.heading}>Contacts</h1>
        <label className={styles.name}>
          <b>Name:</b> <input type="text" onChange={handleChange} value={name}/> <button type="button" onClick={handleClick}>Show Name</button><br />
          {displayName}
        </label>
    </div>
  )
}
