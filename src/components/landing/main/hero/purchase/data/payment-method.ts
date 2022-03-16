import visa from '../images/visa.webp';
import stripe from '../images/stripe.webp';
import paypal from '../images/paypal.webp';

interface IPaymentMethod {
    key: string,
    image: string
}

export const paymentMethods: IPaymentMethod[] = [
    {
        key: 'visa',
        image: visa,
    },
    {
        key: 'paypal',
        image: paypal,
    },
    {
        key: 'stripe',
        image: stripe,
    },
]