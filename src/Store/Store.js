import {configureStore} from "@reduxjs/toolkit";
import  ProductSlice  from "./ReducerSlice";

const store=configureStore({
      reducer:{
           product:ProductSlice
      }
})

export default store;