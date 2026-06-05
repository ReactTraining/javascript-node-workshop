import './App.css'

function App() {
  // function handleClick() {
  //   fetch('https://swapi.info/api/people/1')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }

  async function handleClick() {
    const response = await fetch('https://swapi.info/api/people/1')
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
