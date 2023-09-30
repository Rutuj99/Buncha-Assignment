import React from 'react';
import { Link } from 'react-scroll';
import "../Styles/Styles.css"
import {Button} from "@chakra-ui/react"


export default function SideBar() {
  return (
    <nav className='SideBar-Main'>

        <Button><Link to="Bakery" smooth={true} duration={500} >Bakery</Link></Button><br/>
     
        <Button><Link to="Frozen" smooth={true} duration={500} >Frozen</Link></Button><br/>
     
        <Button><Link to="Diary" smooth={true} duration={500} >Diary & Eggs</Link></Button><br/>
      
        <Button><Link to="Meet" smooth={true} duration={1500} >Meet & Seafood</Link></Button><br/>
     
        <Button><Link to="Fruits" smooth={true} duration={500} >Fruits</Link></Button><br/>

        <Button><Link to="Veggies" smooth={true} duration={500} >Veggies</Link></Button><br/>

        <Button><Link to="Bakery" smooth={true} duration={500} >Bakery</Link></Button><br/>
     
        <Button><Link to="Frozen" smooth={true} duration={500} >Frozen</Link></Button><br/>
     
        <Button ><Link to="Diary" smooth={true} duration={500} >Diary & Eggs</Link></Button><br/>
      
        <Button><Link to="Meet" smooth={true} duration={1500} >Meet & Seafood</Link></Button><br/>
     
        <Button><Link to="Fruits" smooth={true} duration={500} >Fruits</Link></Button><br/>

        <Button><Link to="Veggies" smooth={true} duration={500} >Veggies</Link></Button><br/>

        <Button><Link to="Bakery" smooth={true} duration={500} >Bakery</Link></Button><br/>
     
        <Button><Link to="Frozen" smooth={true} duration={500} >Frozen</Link></Button><br/>
     
        <Button><Link to="Diary" smooth={true} duration={500} >Diary & Eggs</Link></Button><br/>
      
        <Button><Link to="Meet" smooth={true} duration={1500} >Meet & Seafood</Link></Button><br/>
     
        <Button><Link to="Fruits" smooth={true} duration={500} >Fruits</Link></Button><br/>

        <Button><Link to="Veggies" smooth={true} duration={500} >Veggies</Link></Button><br/>

       

         

      </nav>
  )
}
