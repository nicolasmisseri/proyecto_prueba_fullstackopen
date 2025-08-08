const Header = (props) => {
return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <h2 key={index}>{part.name}</h2> // Mostramos el nombre directamente aquí
      ))}
    </div>
   )
  
  
}

const Total  = (props) => {
  return <h1>{props.course}</h1>
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  
  return (
    <>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

export default App