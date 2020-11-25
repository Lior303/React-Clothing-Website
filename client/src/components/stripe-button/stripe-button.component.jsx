import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {emptyCartAfterCheckout} from "../../redux/cart/cart.actions";
import { connect } from 'react-redux';

const StripeCheckoutButton = ({price, emptyCartAfterCheckout}) => {
    //stripe wants price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqcWzJdokespcosNqz5jMUkjhU92nbcv1XaYhKYSnfhyoD0oWFUq5gRFRTOUrB6akkyUpGY2rHNcGkCaxdO37ZP00fGuP6xzi';

    const onToken = token => {
        console.log(token);
        emptyCartAfterCheckout();
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            token={onToken}
            stripeKey={publishableKey}
            label='Pay Now'
            name='React Clothing App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
        />
    );
};

const mapDispatchStateToProps = dispatch => ({
    emptyCartAfterCheckout: () => dispatch(emptyCartAfterCheckout())
});

export default connect(null, mapDispatchStateToProps)(StripeCheckoutButton);