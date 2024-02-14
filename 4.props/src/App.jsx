import Student from "./Student.jsx"

function App() {
  return(
    <>
    <Student name="SpongeBob" age={30} isStudent={true}/>
    <Student name="Patrick" age={40} isStudent={false}/>
    <Student name="Sweety" age={50} isStudent={false}/>
    <Student name="Trupti" age={20} isStudent={true}/>
    <Student/>
    </>
  )
}

export default App
