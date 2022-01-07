import counterReducer from './reducers/counter'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        menu: counterReducer 
    }
})