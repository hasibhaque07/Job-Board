import {configureStore} from '@reduxjs/toolkit'

import jobReducer from '../jobReducer/JobSlice'

const store = configureStore({
    reducer: {
        jobReducer : jobReducer
    }
})

export default store;