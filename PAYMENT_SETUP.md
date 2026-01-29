# Payment Integration Setup Guide

This guide will help you set up Stripe payment processing for your Cognasi Glass Co. website.

## Features Implemented

- Product catalog with pricing
- Shopping cart with add/remove/quantity controls
- Cart sidebar that slides in from the right
- Two checkout flows:
  - **Buy Now**: Quick checkout for single items
  - **Add to Cart**: Build a cart and checkout multiple items at once
- Success page after payment
- Automatic cart clearing after successful purchase

## Getting Your Stripe API Keys

### Step 1: Create a Stripe Account
1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign up" and create your account
3. Complete the registration process

### Step 2: Get Your Test API Keys
1. Log in to your Stripe Dashboard
2. Make sure you're in **Test Mode** (toggle switch in the top right)
3. Go to [Developers > API Keys](https://dashboard.stripe.com/test/apikeys)
4. Copy your **Secret key** (starts with `sk_test_`)

### Step 3: Add Your API Key to the Project
1. Open the `.env` file in the project root
2. Replace the placeholder with your actual test key:
   ```
   STRIPE_SECRET_KEY=sk_test_your_actual_key_here
   ```
3. Save the file

## Testing the Payment Flow

### Using Stripe Test Cards

When in test mode, use these card numbers to test different scenarios:

**Successful Payment:**
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits (e.g., 123)
- ZIP: Any 5 digits (e.g., 12345)

**Payment Declined:**
- Card: `4000 0000 0000 0002`

**Requires Authentication:**
- Card: `4000 0025 0000 3155`

More test cards: [https://stripe.com/docs/testing](https://stripe.com/docs/testing)

### Testing the Checkout Process

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the shop page

3. **Test "Add to Cart" flow:**
   - Click "Add to Cart" on any product
   - Cart sidebar opens automatically
   - Add more items, adjust quantities
   - Click "Checkout"
   - Complete payment with test card

4. **Test "Buy Now" flow:**
   - Click "Buy Now" on any product
   - Redirects directly to Stripe checkout
   - Complete payment with test card

5. After successful payment:
   - You'll be redirected to the success page
   - Cart will be automatically cleared

## Viewing Test Payments

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/test/payments)
2. Make sure you're in **Test Mode**
3. Go to **Payments** to see all test transactions
4. Click on any payment to see full details

## Going Live with Real Payments

When you're ready to accept real payments:

### Step 1: Activate Your Stripe Account
1. Complete Stripe's verification process in your dashboard
2. Provide business information
3. Set up your bank account for payouts

### Step 2: Get Live API Keys
1. Switch to **Live Mode** in Stripe Dashboard
2. Go to [Developers > API Keys](https://dashboard.stripe.com/apikeys)
3. Copy your **Live secret key** (starts with `sk_live_`)

### Step 3: Update Environment Variable
1. Update your `.env` file with the live key:
   ```
   STRIPE_SECRET_KEY=sk_live_your_live_key_here
   ```
2. **IMPORTANT**: Never commit this file to git (it's already in .gitignore)

### Step 4: Deploy
Deploy your site with the live API key set as an environment variable in your hosting platform:
- Netlify: Site settings > Environment variables
- Vercel: Project settings > Environment variables
- Cloudflare Pages: Settings > Environment variables

## Product Pricing

Current placeholder prices (in USD):
- Glass Circle Art: $150.00
- Stained Glass Creation: $180.00
- Glass Art Piece: $220.00
- Artistic Glass Work: $195.00
- Glass Masterpiece: $250.00
- Glass Rose: $175.00

To update prices, edit `/src/data/products.ts` (prices are in cents).

## Customization Options

### Shipping Countries
Currently set to US and CA. To change, edit `/src/pages/api/create-checkout-session.ts`:
```typescript
shipping_address_collection: {
  allowed_countries: ['US', 'CA', 'GB', 'AU'], // Add more countries
}
```

### Success/Cancel URLs
These are automatically set based on your site URL:
- Success: `/success`
- Cancel: `/shop` (returns to shop)

### Payment Methods
Currently accepts cards. To add more (Apple Pay, Google Pay, etc.):
```typescript
payment_method_types: ['card', 'apple_pay', 'google_pay'],
```

## Troubleshooting

**Cart not working?**
- Check browser console for errors
- Make sure JavaScript is enabled
- Try clearing localStorage: `localStorage.clear()`

**API endpoint not found?**
- Restart the dev server after adding the API route
- Check that `output: 'hybrid'` is set in `astro.config.mjs`

**Stripe errors?**
- Verify your API key is correct in `.env`
- Make sure you're using the test key for development
- Check Stripe Dashboard for error details

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Astro Documentation: [https://docs.astro.build](https://docs.astro.build)
- Stripe Support: [https://support.stripe.com](https://support.stripe.com)
