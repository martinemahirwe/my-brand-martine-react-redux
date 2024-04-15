
import { createSlice,PayloadAction} from "@reduxjs/toolkit";

interface apiVariables{
    data: unknown;
    loading: boolean;
    error: unknown;
}

const initialState : apiVariables = {
  data: null,
  loading: false,
  error: null, 
}

const apiSlice= createSlice({
name: 'api',
initialState,
reducers:{
    fetchDataStart(state){
     state.loading = false;
     state.error = null;
    },
    fetchDataSuccess(state, action:PayloadAction) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action:PayloadAction) {
      state.loading = false;
      state.error = action.payload;
    },
}

})

export const { fetchDataStart,fetchDataSuccess, fetchDataFailure } = apiSlice.actions;

export default apiSlice.reducer;
