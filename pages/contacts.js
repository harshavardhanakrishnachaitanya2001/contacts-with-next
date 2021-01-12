import React from 'react'
import styles from '../styles/Contacts.module.css'
import Head from 'next/head'
import Link from 'next/link'
function Contacts(){
    return (
        <div className={styles.body}>
            <Head>
                <title>Contacts</title>
            </Head>
            <h1 className={styles.heading}>Contacts</h1>
            <Link href="/"><button type="button">Go Back</button></Link>
        </div>
    )
}
export default Contacts