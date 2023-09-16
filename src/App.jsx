import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courses, setCourses] = useState([])

  const handleAddCourse = course =>{
    const isExit = courses.find(item => item.id == course.id)
    if(isExit){
      return alert ("al");
    }
    const selectedCourses = [...courses, course];
    setCourses(selectedCourses);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-6 container mx-auto'>
        <Cards handleAddCourse={handleAddCourse}></Cards>
        <Courses courses={courses}></Courses>
      </main>
    </>
  )
}

export default App
