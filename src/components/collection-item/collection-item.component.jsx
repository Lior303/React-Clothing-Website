import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = (
    {name, id, price, imageUrl}
) => (
    <div className='collection-item'>

        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted>
            Add to cart
        </CustomButton>
    </div>
);

//if it is not equal to anything it is true --- for the inverted property

export default CollectionItem;