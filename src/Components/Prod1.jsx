import React, { useEffect, useState } from 'react';
import bakeryData from '../Data/data';
import '../Styles/Styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../Store/ReducerSlice';

export default function Prod1() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.product);

  const productStatus = {};

  cartProducts.forEach((product) => {
    productStatus[product.Name] = true;
  });

  const handleAddProduct = (elem) => {
    dispatch(addProduct(elem));
  };

  const handleRemoveProduct = (elem) => {
    dispatch(removeProduct(elem));
  };

  return (
    <div className='Prod1-Main'>
      {bakeryData.map((elem, id) => {
        const isProductInCart = productStatus[elem.Name] || false;

        return (
          <div className='Prod-one' key={id}>
            <div>
              <img src={elem.Img} alt={elem.Name} />
            </div>
            <div>
              {isProductInCart ? (
                <button onClick={() => handleRemoveProduct(elem)}>-</button>
              ) : (
                <button onClick={() => handleAddProduct(elem)}>+</button>
              )}
              <h3>Rs. {elem.Price}</h3>
              <h4>{elem.Name}</h4>
              <h5>{elem.value} lb</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
