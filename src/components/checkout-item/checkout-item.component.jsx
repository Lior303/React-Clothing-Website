import React from 'react';
import './checkout-item.styles.scss';
import {connect} from "react-redux";
import {deleteItem} from "../../redux/cart/cart.actions";
import {addItem} from "../../redux/cart/cart.actions";
import {removeOneItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, deleteItem, addItem, removeOneItem}) => (
  <div className='checkout-item'>
      <div className='image-container'>
          <img src={cartItem.imageUrl} alt='item'/>
      </div>
      <span className='name'>{cartItem.name}</span>
      <span className='quantity'>
          <div className='arrow' onClick={() => removeOneItem(cartItem)}>&#10094;</div>
          <span className='value'>{cartItem.quantity}</span>
          <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{cartItem.price}</span>
      <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#128465;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeOneItem: item => dispatch(removeOneItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);