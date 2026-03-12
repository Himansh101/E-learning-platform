// import Razorpay from 'razorpay';
// import { ENV } from './env.js';

// export const instance = new Razorpay({
//   key_id: ENV.RAZORPAY_KEY_ID,
//   key_secret: ENV.RAZORPAY_KEY_SECRET,
// });

import Stripe from 'stripe'
import { ENV } from './env.js'

export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY)