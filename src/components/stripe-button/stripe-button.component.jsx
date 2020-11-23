import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    //stripe wants price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqcWzJdokespcosNqz5jMUkjhU92nbcv1XaYhKYSnfhyoD0oWFUq5gRFRTOUrB6akkyUpGY2rHNcGkCaxdO37ZP00fGuP6xzi';

    const onToken = token => {
        console.log(token);
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

export default StripeCheckoutButton;