import './App.css'
import Cards from './Components/Cards/Cards'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-6 container mx-auto'>
        <Cards></Cards>
        <Course></Course>
      </main>
    </>
  )
}

export default App
