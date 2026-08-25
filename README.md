## 🇬🇧 About

This web-app aims to support management of short-term rental. It helps manage the cleaning and laundry of apartments.
The app is integrated via API with Hostex - a Property Management System, which does not have the ability to manage cleaning and laundry.

See the app here:
https://bookingowy.vercel.app

## 🇵🇱 O projekcie

Ta aplikacja webowa wspiera zarządzanie wynajmem krótkoterminowym. Pomaga w zarządzaniu usługami sprzątania i prania.
Aplikacja jest zintegrowana przez API z Hostex - Systemem Zarządzania Nieruchomościami, któremu brakuje funkcjonalności zarządzania sprzątaniem i praniem.

Zobacz działającą aplikację tutaj:
https://bookingowy.vercel.app

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) (to setup local database faster)

## Run the project locally

To run the project locally, follow the following steps:

### 1. Copy the repo:
```bash
gh repo clone rafalkesik/bookingowy
cd bookingowy
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Set up environment variables
Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

Generate a value for `BETTER_AUTH_SECRET`:

```bash
openssl rand -base64 32
```
### 4. Start the local database

This spins up a local Postgres instance with Docker:

```bash
docker compose up -d
```

This creates a database matching the `DATABASE_URL` in `.env.example` (default: `postgresql://postgres:postgres@localhost:5432/myapp`).

(You can also create the virtual Postgres instance, and put the DB URL values inside the .env file.)

### 5. Run database migrations

```bash
npx prisma migrate dev
```

This creates the schema in your local database. Optionally seed it:

```bash
npx prisma db seed
```
### 6. Add an admin user
```bash
npx auth@latest create-admin --email admin@example.com --name "Admin" --role admin
```
This script is official betterAuth script taken from: https://better-auth.com/docs/plugins/admin#usage

### 6. Start the dev server

```bash
npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).
