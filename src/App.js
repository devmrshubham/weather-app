import React from 'react'
import Myapp from './Components/Myapp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <h2 style={{textAlign:"center",marginTop:"1.25rem"}}> Weather App</h2>
      <Myapp />
    </>
  )
}

export default App
