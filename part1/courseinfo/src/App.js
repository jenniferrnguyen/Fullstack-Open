const Header = (prop) => {
  console.log(prop)
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  )
}


const Content = (prop) => {
  return (
    <>
      <Part part={prop.part1} exercises={prop.exercises1}/>
      <Part part={prop.part2} exercises={prop.exercises2}/>
      <Part part={prop.part3} exercises={prop.exercises3}/>
    </>
  )
}

const Part = (prop) => {
  return (
    <>
      <p>{prop.part} {prop.exercises}</p>
    </>
  )
}

const Total = (prop) => {
  return (
    <>
      <p>Number of exercises {prop.total}</p>
    </>
  )
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
    <div>

      <Header course={course}/>
      
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises}/>

      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
      
    </div>
  )
}

export default App