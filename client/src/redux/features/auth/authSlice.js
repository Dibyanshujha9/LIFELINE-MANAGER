import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, userLogin, userRegister } from './authActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {

        // THIS IS FOR LOGIN ONLY 
        

// this is for the pending phase 
builder.addCase(userLogin.pending,(state)=>{
    state.loading = true;
    state.error = null
})
// this is for the fulfilled phase 
builder.addCase(userLogin.fulfilled,(state,{payload}) => {
state.loading = false;
state.user = payload.user;
state.token = payload.token
})
// this is for the rejected case 
builder.addCase(userLogin.rejected,(state , {payload})=>{
state.loading = false;
state.error = payload;
})


// THIS IS FOR REGISTER ONLY 


// this is for the pending phase 
builder.addCase(userRegister.pending, (state) => {
    state.loading = true;
    state.error = null;
  });
// this is for the fulfilled phase 
builder.addCase(userRegister.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.user = payload.user;
  });
// this is for the rejected case 
builder.addCase(userRegister.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload;
  });



//   THIS IS FOR THE CURRENT - USER 


   builder.addCase(getCurrentUser.pending, (state) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.user = payload.user;
  });
  builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload;
  });

    },
});

export default authSlice.reducer;
