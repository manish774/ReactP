import React from "react"


const Student=(props)=>{
    return <div>
        <h1>Student details</h1>
        <h1>Your name{props.name}</h1>
        <h2>roll no.{props.roll}</h2>
    </div>
}

export default Student;