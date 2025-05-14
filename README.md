# SaaS Web Application

 SaaS web application built with Next.js, featuring a landing page, pricing plans, and user management system. The project implements best practices in web development, including secure authentication, database management, and payment processing.

## 🚀 Features

- **Modern Tech Stack**

    - Next.js 14 with App Router
    - TypeScript for type safety
    - Tailwind CSS for styling
    - Radix UI components for accessible UI elements

- **Authentication & Authorization**

    - Clerk integration for user authentication
    - Role-based access control
    - Protected routes and API endpoints

- **Database & Data Management**

    - PostgreSQL database with Neon
    - Drizzle ORM for type-safe database operations
    - Efficient data modeling with proper table relations
    - Data validation using Zod

- **Payment Processing**

    - Stripe integration for payment handling
    - Webhook support for payment events
    - Subscription management

- **Developer Experience**
    - Type-safe environment variables
    - ESLint for code quality
    - Proper project structure separation (client/server)
    - Database migrations and management tools

## Prerequisites

- Node.js
- PostgreSQL database (Neon account)
- Stripe account (just mocking)
- Clerk account (free trial)

## Setup

1. Clone the repository:

    ```bash
    git clone [repository-url]

    npm install

    ```

2. Set up the database:
    ```bash
    npm run db:generate
    npm run db:migrate
    ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

    ```
    # Database
    DATABASE_URL=your_neon_database_url

    # Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key

    # Stripe
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    ```


## Test run app

```bash
npm run dev
```

## 📁 Project Structure

```
├── app/              # Next.js app directory (pages and API routes)
├── components/       # Reusable React components
├── data/            # Data-related utilities and types
├── drizzle/         # Database migrations and schema
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared logic
├── schemas/         # Zod validation schemas
├── server/          # Server-side code
└── tasks/           # Utility scripts and tasks
```

## 🔒 Security features

- Environment variable validation using @t3-oss/env-nextjs
- Secure authentication with Clerk
- Protected API routes
- Secure payment processing with Stripe
- Input validation using Zod

## 🎨 UI/UX features

- Modern SaaS landing page design
- Responsive pricing plans
- Accessible UI components using Radix UI
- Toast notifications for user feedback

