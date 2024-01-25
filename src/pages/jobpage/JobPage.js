import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header';
import './JobPage.css'
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';

const JobPage = () => {
    const location = useLocation();
    const id = location.state.id;
    const jobData = location.state.jobData;

    console.log(id, jobData);
    console.log(location.state);
   
   

    const darkMode = useSelector((state) => state.jobReducer.isDarkMode);

    const handleDarkMode = (isDarkMode) => {
        //setDarkMode(isDarkMode);
    }
    
    return (
        <div className= {darkMode ? 'dark-mode' : 'light-mode'}>
            <Header />
            <div className='job-details-container'>
                <div className='job-container'>
                    
                    <div className='job-header'>
                        <div className='job-header-logo' style={{backgroundColor:jobData.logoBackground}}>
                            <img src={process.env.PUBLIC_URL + '/logos/' + jobData.logo} alt="Logo" />
                        </div>
                        <div className='job-header-content'>
                            <h1 className='job-header-company'>{jobData.company}</h1>
                            <p className='header-website'>{jobData.website}</p>
                        </div>
                        <div className='job-header-btn'>
                            <a href={jobData.website} target="_blank">
                                <Button buttonStyle={'btn-secondary'} text={'Company Site'} width = {'140px'} />
                            </a>
                        </div>
                    </div>

                    <div className='main-container'>
                        <div className='main-header-container'>
                            <div className='main-header-content'>
                                <div>
                                    <span className='main-postedAt'>{jobData.postedAt}</span>
                                    <span className='main-dot'>.</span>
                                    <span className='main-contract'>{jobData.contract}</span>
                                </div>
                                <h1 className='main-job-position'>{jobData.position}</h1>
                                <p className='main-location'>{jobData.location}</p>
                            </div>
                            <div className='main-header-btn'>
                                <a href={jobData.website} target="_blank">
                                    <Button buttonStyle={'btn-primary'} text={'Apply Now'} width = {'100%'} />   
                                </a>
                            </div>
                        </div>

                        <div className='main-descrtption'>
                            <p className='main-desc'>{jobData.description}</p>
                            <h3 className='requirements-h3'>Requirements</h3>
                            <p className='main-requirement-desc'>{jobData.requirements.content}</p>
                            {jobData.requirements.items.map(item => <li className='main-requirement-list'>{item}</li>)}

                            <h3 className='todo-h3'>What You Will Do</h3>
                            <p className='main-todo-desc'>{jobData.role.content}</p>
                            
                            {jobData.role.items.map(item => <li className='main-todo-list'>{item}</li>)}
                            
                        </div>

                    </div>

                </div>
                
            </div>
            <div className='job-footer'>
                    <div className='job-footer-container'>
                        <div className='job-footer-content'>
                            <h3>{jobData.position}</h3>
                            <p className='footer-company'>{jobData.company}</p>
                        </div>
                        <div className='job-footer-btn'>
                            <a href={jobData.website} target="_blank">
                                <Button buttonStyle={'btn-primary'} text={'Apply Now'} width = {'100%'} />
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default JobPage
