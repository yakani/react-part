import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  const api = "https://backend-iota-three-50.vercel.app";
  useEffect(() => {
    fetch(api+"/create-payment-intent").then(async (r) => {
      const resp = await r.json();
      setStripePromise(loadStripe(resp.publickey));
    });
  }, []);
  useEffect(() => {
    fetch(api+"/api/v2/const/unic/"+id,{
      credentials:"include",
    }).then(async (r) => {
      const resp = await r.json();
      const cool = { price : resp.product.price, number : resp.product.qty };
      fetch(api+"/create-payment-intent", {
      method: "POST",
      credentials:"include",
      headers:{
              'Content-Type':'application/json'
            },
      body: JSON.stringify(cool),
    }).then(async (result) => {
      const resp = await result.json();
      setClientSecret(resp.clientSecret);
    });
     
    });
  }, []);
  


  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
