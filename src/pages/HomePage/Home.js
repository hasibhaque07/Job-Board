import React, { useEffect, useState } from 'react'

import JobsData from '../../assets/data.json'
import './Home.css'
import JobCard from '../../components/JobCard/JobCard';
import FilterData from '../../components/FilterData/FilterData';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { updateVisibleJobs } from '../../jobReducer/JobSlice';

const Home = () => {
    
    const [jobsData, setJobsData] = useState(JobsData);
   

    const visibleJobs = useSelector((state) => state.jobReducer.visibleJobs);
    const darkMode = useSelector((state) => state.jobReducer.isDarkMode);
    const dispatch = useDispatch(); 

    const filterData = useSelector((state) => state.jobReducer);
    const {position, location, isFullTime} = filterData;
    
    useEffect(() =>{
        let filterData = JobsData.filter((job) =>  job.position.toLowerCase().includes(position.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())  &&
        job.contract.toLowerCase().includes(isFullTime.toLowerCase()));

        setJobsData(filterData);
    },[filterData]);



    const handleButtonClick = () => {
        dispatch(updateVisibleJobs(jobsData.length));
    }

    
    
    return (
        <div className= {darkMode ? 'dark-mode' : 'light-mode'}>
            <Header />
            <div className='container'>
                <FilterData/>

                <div className='grid-container '>
                    {jobsData.slice(0, visibleJobs).map((jobData) => {
                        return <JobCard jobData = {jobData}/>
                    })}
                </div>

                
                <div className= 'showmmore-btn'>
                    {visibleJobs < jobsData.length && 
                    <Button buttonStyle={'btn-primary'} text={'Show More'} width = {'140px'} onClick={handleButtonClick} />}
                </div>

            </div>

        </div>  
    )
}

export default Home
