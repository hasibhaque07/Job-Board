import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from '../../jobReducer/JobSlice';
import './FilterData.css'
import Button from '../Button/Button';
import searchIcon from '../../assets/mobile/icon-search.svg';
import iconFilter from '../../assets/mobile/icon-filter.svg';

const FilterData = () => {

    const state = useSelector((state) => state);

    const isChecked = useSelector((state) => state.jobReducer.isChecked);
    const dispatch = useDispatch();

    const [position, setPosition] = useState(state.jobReducer.position);
    const [location, setLocation] = useState(state.jobReducer.location);
    const [fullTimeCheck, setCheck] = useState(state.jobReducer.fullTimeCheck);
    const [isFullTime, setIsFullTime] = useState(state.jobReducer.isFullTime);

    const darkMode = useSelector((state) => state.jobReducer.isDarkMode);
    
    useEffect(() =>{
        if(fullTimeCheck) setIsFullTime('Full Time');
        else setIsFullTime('');
    },[fullTimeCheck]);

    const handleSubmit = (e) =>{
        e.preventDefault();
       
       
        dispatch(filterUpdate({position, location, fullTimeCheck, isFullTime}));
    }
    
    const locationSearchContainer = document.getElementById('location-search-container');
    const handleFilterClick = () => {
        if(locationSearchContainer){
            locationSearchContainer.classList.add('visible');
        }
    }
    const handleRemoveClass = () => {
        if(locationSearchContainer){
            locationSearchContainer.classList.remove('visible');
        }
    }


    return ( 
        <div className={`filter-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='title-box-container'>
                    <input type='text' className = 'title-box dark-box' value = {position} placeholder='Filter by title' onChange={(e) => setPosition(e.target.value)}/>
                        <div className='filterIcon-container' onClick={handleFilterClick}>
                            <img src= {iconFilter}/>
                        </div>
                        <button type='submit' className='mobile-search-btn'>
                            <img src= {searchIcon}/>
                        </button>
                    
                </div>
                <div className='location-search-container' id='location-search-container'>
                    <div className='location-search-container2'>
                        <div className='location-box-container'>
                            <input type='text' className = 'location-box dark-box' value = {location} placeholder='Filter by location' onChange={(e) => setLocation(e.target.value)}/>
                        </div>
                        <div className='search-box-container dark-box'>
                            <div>
                                <input type='checkbox' checked = {fullTimeCheck} onChange={() => setCheck(!fullTimeCheck)}/><span>Full Time</span>
                            </div>
                                
                            <div className='filter-btn-container' onClick={handleRemoveClass}>
                                <Button buttonStyle={'btn-primary'} text={'Search'}  type = {'submit'} width={'100%'}/>
                            </div>
                        </div>
                    </div>
                </div>
                    
                
                
                  
                
            </form>
        </div>
    )
}

export default FilterData
