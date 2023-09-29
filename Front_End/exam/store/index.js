import { configureStore } from "@reduxjs/toolkit";
import { CartItemSlice } from "./CartSlice";

import { popupSlice } from "./PopupSlice";
import { validateSlice } from "./validateSlice";



///redux store quan li cac state cua project, nhan ve doi tuong cac ham reducer duoc hop tu thanh 3 nhanh slice reducer
const store = configureStore({
    reducer : {
     popup : popupSlice.reducer ,
     cart : CartItemSlice.reducer ,
     validate : validateSlice.reducer 
    }
})
export const popupAction = popupSlice.actions;////tao mot bien chua cac reducer duoc tao thanh action tu popupslice
export const ActitonCartItem = CartItemSlice.actions;
export const validateAction = validateSlice.actions;
export default store;


// import { configureStore } from "@reduxjs/toolkit";
// const store2  = configureStore({
//     reducer:{
//         popup: popupSlice.reducer,
//         cart: CartItemSlice.reducer,
//         validate: validateSlice.reducer
//     }
// })
// export const popupAction2 = popupSlice.actions
// export const ActitonCartItem2 =  CartItemSlice.actions
// export const validateSlice2 = validateSlice.actions
//export default store;