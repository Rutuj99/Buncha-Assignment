import React from "react";
import "../Styles/Styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

export default function NavBar() {

  const cartProducts = useSelector((state) => state.product);
  // console.log("navbar",cartProducts.length)

  return (
    <div className="nav-Container">

      <div className="nav-one">
      <img src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png"/>
        <span>E-COMMERCE</span>
      </div>
     
      <div className="nav-two">
        <div>
        <FontAwesomeIcon icon={faSheetPlastic} />
          <span>Share Logs</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCartShopping} />
          <span>{cartProducts.length}</span>
        </div>
      </div>

    </div>
  );
}
