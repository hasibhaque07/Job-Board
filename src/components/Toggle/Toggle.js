import React from 'react'

import './Toggle.css'
import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { modeChanger } from '../../jobReducer/JobSlice';


const Toggle = () => {

  
    // const isDarkMode = useSelector((state) => state.jobReducer.isDarkMode);
    const isChecked = useSelector((state) => state.jobReducer.isChecked);
    const dispatch = useDispatch();
    
    

    return (
        <div className='toggle-container'>
            <div>
                <img src={sun} alt='sun'/>   
            </div>

            <div className='switch-container'>
                <label className='switch'>
                    {/* <input type='checkbox' onClick={() => {setisDarkMode(!isDarkMode)}} /> */}
                    <input type='checkbox' checked = {isChecked} onClick={() => dispatch(modeChanger())} />
                    <span className='slider round'></span>
                </label>
            </div>

            <div>
                <img src={moon}/>   
            </div>
        </div>
    )
}

export default Toggle
