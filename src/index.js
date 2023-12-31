import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import store from './Store/Store';
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <ChakraProvider>
   <App />
   </ChakraProvider>
   </Provider>
);

