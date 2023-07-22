const Header = (prop) => {
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  )
}

const Content = (prop) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

      {/* 
      <h1>{course}</h1>
      */}

      <Header course={course}/>

      {/* 
      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>
      */}

      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      
      {/* 
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      */}

      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App