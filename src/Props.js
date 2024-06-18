import React from 'react' //rfc enter react function component
// we need to import this in app.js to execute
export default function Props(props) { //import props in function
    console.log(props)
  return (
    <div>
      <h1> this is props component</h1>
      <p>Name: <b>{props.studentName}</b> and roll no:<b> {props.studentRollno}</b></p>
    </div>
  )
}
