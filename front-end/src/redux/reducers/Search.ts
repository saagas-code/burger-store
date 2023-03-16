import { createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'cart',
    initialState: {
        searchh: '' as string,
    },
    reducers: {
       setSearchQuery: (state, action) => {
          state.searchh = action.payload
        },
        
    },
})

export const { setSearchQuery } = slice.actions;
export default slice.reducer; 



