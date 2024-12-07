import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OFXhzG2TBEyRbDruXPeZg2trrlyvQyRgoVrmNwqo0dSGfS8k8Jb79QDPPEynPY3CdEwnClYpTqCPFm7KWnWGIV200lY1UUjqw');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};