import React from 'react'
import {myContextConsumer} from '../components/MyContext'
export default function Contacts(){
    return (
        <div>
            <h1>Contacts</h1>
            <myContextConsumer>
                {
                    (detailsOfPerson)=>{
                        return (
                            <div>
                                {detailsOfPerson.name}
                            </div>
                        )
                    }
                }
            </myContextConsumer>
        </div>
    )
}