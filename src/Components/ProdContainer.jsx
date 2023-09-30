import React from 'react';
import { Element } from 'react-scroll';
import Prod1 from './Prod1';


export default function ProdContainer() {
  return (
  
    <div className='Main-ProdContainer'>
    <Element name="Bakery">
         <h1>Bakery</h1> 
           <Prod1/>
    </Element>

    <Element name="Frozen" >
    <h1>Frozen</h1> 
       <Prod1 />
    </Element>

    <Element name="Diary" >
    <h1>Diary</h1> 
    <Prod1/>
    </Element>

    <Element name="Meet" >
    <h1>Meet</h1> 
    <Prod1/>
    </Element>

    <Element name="Fruits">
    <h1>Fruits</h1> 
    <Prod1/>
    </Element>

    <Element name="Veggies" >
    <h1>Veggies</h1> 
    <Prod1/>
    </Element>
   </div>
  )
}
