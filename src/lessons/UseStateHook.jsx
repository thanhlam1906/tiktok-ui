import { useState } from "react";

function CountNumber() {
  const [counter, setCounter] = useState(1)
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1> {counter} </h1>
      <button onClick={handleIncrease}> Increase </button>
    </div>
  );
}
const courses =[
  {
    id: 1,
    name: 'Javascript'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'HTML/CSS'
  },
  {
    id: 4,
    name: 'Angular'
  }
]
function TwoWayBinding(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(1)
  const handleSubmit = () =>{
    console.log({
      name,
      email
    })
  }
  return (
    <div>
      <input value = {name} onChange={e => setName(e.target.value)} />
      <br />
      <input value = {email} onChange={e => setEmail(e.target.value)} />
      <br />
      {courses.map(course => (
        <div key={course.id}>
          <input 
          checked = {checked === course.id}
          onChange={() => setChecked(course.id)}
          type="radio"/>
          {course.name}
        </div>
      
      ))}

      <button onClick={handleSubmit}> Register</button>
    </div>
  );
}

// To do list UseState

function ToDoList(){
  const storageJobs = JSON.parse(localStorage.getItem('jobs'))
  const [job, setJob] = useState('')
  const [jobs,setJobs] = useState(storageJobs ?? [])
  const handleSubmit = () =>{
    setJobs(prev => {
      const newJobs =  [...prev, job]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
  })
    setJob('')
  }
  return(
    <div style={{padding: 32}}>
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit} >Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
        
      </ul>
    </div>
  )
    
}
export { CountNumber, TwoWayBinding, ToDoList }