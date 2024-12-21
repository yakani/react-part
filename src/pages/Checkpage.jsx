import React from 'react'
import { Helmet } from 'react-helmet'
import Checkout from '../component/checkout';
const Checkpage = () => {
  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>Accept a payment</title>
    <meta name="description" content="A demo of a payment on Stripe" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/check.css" />
    <script src='../component/checkout.js'/>
    <script src="https://js.stripe.com/v3/"></script>
  
    </Helmet>
    <Checkout/>
     <form id="payment-form">
      <div id="payment-element">
       
      </div>
      <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text" >Pay now</span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
    </>
  )
}

export default Checkpage
