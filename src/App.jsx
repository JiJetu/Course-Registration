import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [courses, setCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCourse = course =>{
    const isExit = courses.find(item => item.id == course.id)
    let count = course.credit;
    let remaining = 20;
    let total = course.price;
    if(isExit){
      return toast ("already taken");
    }
    else{
      courses.forEach(item => {
        count += item.credit;
        total += item.price; 
      })
    }
    remaining -= count;
    if(count > 20){
      return toast ("required credit hour") 
    }
    setRemainingCredit(remaining);
    setTotalCredit(count);
    setTotalPrice(total);
    const selectedCourses = [...courses, course];
    setCourses(selectedCourses);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-6 container mx-auto'>
        <Cards handleAddCourse={handleAddCourse}></Cards>
        <Courses totalCredit={totalCredit} remainingCredit={remainingCredit} 
       totalPrice={totalPrice} courses={courses}></Courses>
      </main>
      <Toaster></Toaster>
    </>
  )
}

export default App
