import React,{useState} from 'react'
import Displayvehicle from './Displayvehicle'


export default function Vehicles() {
    const[myVehicles , setmyVehicle]=useState(

       [{name: "bike" ,
        price:50000,
        description:"bike description",
        pic:"https://5.imimg.com/data5/LX/PM/GLADMIN-68162457/kawasaki-ninja-h2-bike.png" },
        
       { 
        name: "car" ,
        price:50000,
        description:" car description",
        pic:"https://imgd.aeplcdn.com/600x337/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" },

      {  name: "tractor",
         price:50000,
         description:"tractor description",
        pic:"https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg" }


       

    ])
  return (

    <div>
        <Displyvehicle  hareesh={myVehicles}/>
        
    

      
    </div>
  )
}
