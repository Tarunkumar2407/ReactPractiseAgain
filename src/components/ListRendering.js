import React from 'react'

const ListRendering = () => {
    const students = [
        {name : "Tarun", email: "tarun@gmail.com", contact: 99909},
        {name : "Ankur", email: "Ankur@gmail.com", contact: 4656654},
        {name : "Mohit", email: "Mohit@gmail.com", contact: 9555465},
        {name : "varun", email: "varun@gmail.com", contact: 954155}
    ]
  return (
    <div>
      <h1>handle array with list</h1>
      <table>
        <thead>
            <tr>
                <td>Roll No.</td>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
        </thead>
        <tbody>
        {
            students.map((student, i)=> {
                return(
                    <tr key={i + 1}>
                    <td>{i + 1}</td>
                   <td>{student.name}</td>
                   <td>{student.email}</td>
                   <td>{student.contact}</td>
                </tr>
                )
            })
        }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListRendering
