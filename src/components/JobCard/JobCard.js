import React from 'react'

import { Link } from 'react-router-dom';
import './JobCard.css'



const JobCard = ({jobData}) => {
    
    return (
        
            <div key={jobData.id} className='card-container grid-item'>
                    <div className='card-logo-container' style={{backgroundColor:jobData.logoBackground}}>
                        <img src={process.env.PUBLIC_URL + '/logos/' + jobData.logo} alt = 'logo' />
                        {/* <img src= {require(`../../assets/logos/${jobData.logo}`)} alt = 'logo' />  */}
                        
                        {/* {console.log(jobData.logo)}  */}
                    </div>
                    <div>
                        <span className='postedAt'>{jobData.postedAt}</span>
                        <span className='dot'>.</span>
                        <span className='contract'>{jobData.contract}</span>
                    </div>
                    <Link to = '/job-page' className= 'link-text' state = {{id : jobData.id, jobData: jobData}}><h2 className='position'>{jobData.position}</h2></Link>
                    
                    <p className='conpany'>{jobData.company}</p>
                    <p className='location'>{jobData.location}</p>
                </div>
            
            
       
    )
}

export default JobCard
