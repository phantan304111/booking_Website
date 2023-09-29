import { createSlice } from "@reduxjs/toolkit";
/////

export const validateSlice = createSlice({
  name: "validate",
  initialState: {
    userName: "",
    enteredEmail: "",
    EnteredPhoneNumber: '',
    enteredPassword: "",
    isSign : false
  },
  reducers: {
    enteredUserName (state,action){
      state.userName = action.payload
    },
    enteredEmail (state,action){
state.enteredEmail = action.payload
    },
    enteredPassword (state,action){
state.enteredPassword = action.payload
    },
    EnteredPhoneNumber (state,action){
state.EnteredPhoneNumber = action.payload
    },
    OnLogin(state,action){ console.log(action.payload);
     state.isSign = action.payload
    },
    LogOut(state,action){ console.log(action.payload);
     state.isSign = action.payload
    }
  },
});
// import { createSlice } from "@reduxjs/toolkit";
// export const validateSlice2 = createSlice({
//   name:'validate',
//   initialState:{
//     userName: '',
//     enteredEmail:'',
//     EnteredPhoneNumber:'',
//     enteredPassword:'',
//     isSign:false
//   },
//   reducers:{
//     enteredUserName(state,action){
//       state.userName = action.payload;
//     },
//     enteredEmail(state,action){
// state.enteredEmail = action.payload;
//     },
//     enteredPassword(state,action){
//       state.enteredPassword = action.payload;
//     },
//     EnteredPhoneNumber(state,action){
//       state.EnteredPhoneNumber = action.payload
//     },
//     OnLogin(state,action){
//       state.isSign = action.payload;
//     },
//     LogOut(state,action){
//       state.isSign = action.payload
//     }
//   }
// })