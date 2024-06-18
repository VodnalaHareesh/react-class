import React from 'react'
import './Vehicle.css'
export default function Displayvehicle(props) {
  return (
    
<div className='vehicle-parent'>
        {
            props.hareesh.map((vehicle)=>(
            <div  className ='vehicle'>

                <p><b> name:</b>{vehicle.name}</p>
                <p><b> price:</b>{vehicle.price}</p>
                <p><b> description:</b>{vehicle.description}</p>
                <img src={vehicle.pic} alt={vehicle.name} width ="60%"/> 
            </div>
            ))
        }
      
    </div>
  )
}
