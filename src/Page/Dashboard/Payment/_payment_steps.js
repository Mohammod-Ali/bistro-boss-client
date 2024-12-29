/**
 * 1. install stripe and stripe react
 * 2. create card element( like payment component)
 * 3. create stripe account and get pk
 * 4. use publishable key and stripe to get card information and error 
 * 5. create payment intent post on the server and  return client secret. install stripe on the server side and get client secret. make sure you used the payment method types;['card']
 * 6. from client side get the client secret and save it 
 * 7. use confirm card payment and pass user information, card and client secret
 * 8. display transaction id
 * 
 * follow the doc: https://github.com/stripe/react-stripe-js/blob/master/examples/hooks/0-Card-Minimal.js
 */