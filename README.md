# GeniusAI - AI Tool

Welcome to GeniusAI, an advanced AI tool packed with powerful features for a seamless user experience.

## Features

- **Clerk Authentication:** Support for email, Google, and 9+ social logins via Clerk.
- **Image Generation Tool:** Leverage Open AI for image generation.
- **Video Generation Tool:** Utilize Replicate AI for video generation.
- **Conversation Generation Tool:** Engage users with dynamic conversations using Open AI.
- **Music Generation Tool:** Add a musical touch with Replicate AI's music generation.
- **Stripe Monthly Subscription:** Implement a secure subscription model using Stripe.
- **Free Tier with API Limiting:** Offer a free tier with limited API access.

## Getting Started

Follow these steps to set up and run the GeniusAI project on your local machine.

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/TusharPani14/GeniusAI.git
    cd geniusai
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the project and add the following variables:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Open AI and Replicate API
   OPENAI_API_KEY=
   REPLICATE_API_TOKEN=

   # Database Configuration
   DATABASE_URL=

   # Stripe Integration
   STRIPE_API_KEY=
   STRIPE_WEBHOOK_SECRET=

   # Application URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"

4. **Run the Development Server:**
    ```bash
    npm run dev
    ```

5. **Open the Application:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

We welcome contributions! If you'd like to contribute to GeniusAI, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the README with more specific details about your project, installation steps, and contribution guidelines. Make sure to include appropriate links and references.
