# Server (Express + Mongoose)

- Local MongoDB URL: `mongodb://127.0.0.1:27017/skinera`
- API base: `http://localhost:3002`
- Routes:
  - POST `/api/admin-login` { username, password }

## Seeding (on-demand)

Use the seed script only when you want to create or update an admin user.

- Run: `npm run seed`
- Defaults: username `admin`, password `admin123`
- Override with env vars: `SEED_ADMIN_USERNAME`, `SEED_ADMIN_PASSWORD`

## Run

1. Install deps
2. Ensure MongoDB is running locally
3. Start the server

Environment: set `MONGO_URI` if you need a custom connection string.
