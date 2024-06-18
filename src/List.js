import React, { useState } from 'react'

export default function List() {
    const [name, setName] = useState([
        {
            name: "hari",
            age: 23,
            gender: "male",
            place: "raghvapoor"
        },
        {
            name: "sai",
            age: 23,
            gender: "male",
            place: "andukuthanda"
        },
        {
            name: "hari",
            age: 23,
            gender: "male",
            
        },
        {
            name: "hari",
            age: 23,
            gender: "male"
        },
        {
            name: "hari",
            age: 23,
            gender: "male"
        }


    ])
    return (
        <div>
            {
                name.map((emp)=>(
                    
                    <div>
                        
                    <p> Name:{emp.name}</p>
                    <p> age:{emp.age}</p>
                    <p> gender:{emp.gender}</p>
                    <p> place:{emp.place}</p>
                    </div>
                ))
               
                
            }

        </div>
    )
}
