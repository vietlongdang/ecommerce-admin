# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

To view the demo, please visit the following link: https://ecommerce-admin-red-chi.vercel.app/

If you'd like to test the purchase functionality, you can use [Stripe Testing Cards](https://stripe.com/docs/testing)

This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma,
MySQL

Key Features:

- Used Shadcn UI for the Admin!
- Admin dashboard is serving as both CMS, Admin and API!
- You are able to control multiple vendors / stores through this single CMS! (For example you can have a "Shoe store"
  and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- You are able to create, update and delete categories!
- You are able to create, update and delete products!
- You are able to upload multiple images for products, and change them whenever you want!
- You are able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product"
  creation form.
- You are able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able
  to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- You are able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You are able to control which products are "featured" so they show on the homepage!
- You are able to see your orders, sales, etc.
- You are able to see graphs of your revenue etc.
- Used Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 18.x**

### Cloning the repository

```shell
git clone https://github.com/vietlongdang/ecommerce-admin.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
    CLERK_SECRET_KEY =
        NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL =
/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL =
/

#
This
was
inserted
by`prisma init`
:
#
Environment
variables
declared in this
file
are
automatically
made
available
to
Prisma.
#
See
the
documentation
for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

    #
Prisma
supports
the
native
connection
string
format
for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB
and
CockroachDB.
#
See
the
documentation
for all the
connection
string
options: https://pris.ly/d/connection-strings

    DATABASE_URL = ''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = ""
STRIPE_API_KEY =
    FRONTEND_STORE_URL = http
://localhost:3001
STRIPE_WEBHOOK_SECRET =
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
|:--------|:-----------------------------------------|
| `dev`   | Starts a development instance of the app |
