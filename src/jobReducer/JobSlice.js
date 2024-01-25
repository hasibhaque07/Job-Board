import {createSlice} from '@reduxjs/toolkit';

const initialData = {
    isDarkMode : false,
    isChecked: false,
    position: '',
    location: '',
    fullTimeCheck: false,
    isFullTime: '',
    visibleJobs: 9
}

const jobSlice = createSlice({
    name: 'jobboard',
    initialState: initialData,
    reducers: {
        modeChanger: (state) =>{
            return { ...state, isDarkMode: !state.isDarkMode, isChecked: !state.isChecked };
        },
        filterUpdate: (state, action) => {
            const {position, location, fullTimeCheck, isFullTime} = action.payload;
            
            return { ...state, position: position , location: location, fullTimeCheck: fullTimeCheck, isFullTime: isFullTime};
        },
        updateVisibleJobs: (state, action) => {
            return { ...state, visibleJobs: action.payload };
        }
    }

})

export const {modeChanger, filterUpdate, updateVisibleJobs} = jobSlice.actions;
export default jobSlice.reducer;