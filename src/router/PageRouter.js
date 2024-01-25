import React from 'react'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import JobPage from '../pages/jobpage/JobPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const PageRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/home' element = {<Home/>}/>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/job-page' element = {<JobPage/>}/>
                <Route path = '*' element = {<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default PageRouter
