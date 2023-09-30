import React from "react";
import { createAction, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "prod",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },

    removeProduct(state, action) {
      //  state.pop(action.payload);
      // if we are not sending user ID and sending entire User then,just geting index of that user and the same,
       let index= state.indexOf(action.payload); 
       state.splice(index,1);
    //   state.splice(action.payload, 1);
    },
  },
});



export default ProductSlice.reducer; //for store
export const { addProduct, removeProduct} = ProductSlice.actions; //for dispatch
