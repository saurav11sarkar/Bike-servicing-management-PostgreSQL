# Bike Servicing Management API

A backend API for managing bike servicing operations, including customer, bike, and service record management.

## Features

- Customer CRUD operations
- Bike CRUD operations
- Service record management
- Mark services as completed
- Get pending or overdue services

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## Setup Guide

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL database and update DATABASE_URL in .env
4. Run database migrations: `npx prisma migrate dev`
5. Start the server:
   - Development: `npm run dev`
   - Production: `npm run build && npm start`

## API Endpoints

### Customers
- POST `/api/customers` - Create a new customer
- GET `/api/customers` - Get all customers
- GET `/api/customers/:customerId` - Get a specific customer
- PUT `/api/customers/:customerId` - Update a customer
- DELETE `/api/customers/:customerId` - Delete a customer

### Bikes
- POST `/api/bikes` - Add a new bike
- GET `/api/bikes` - Get all bikes
- GET `/api/bikes/:bikeId` - Get a specific bike

### Services
- POST `/api/services` - Create a service record
- GET `/api/services` - Get all service records
- GET `/api/services/:serviceId` - Get a specific service record
- PUT `/api/services/:serviceId/complete` - Mark a service as completed
- GET `/api/services/status/pending-overdue` - Get pending or overdue services

## env
- DATABASE_URL="prisma+postgres://localhost:51213/?api_key=eyJkYXRhYmFzZVVybCI6InBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ"
- DATABASE_URL="postgresql://postgres:password@localhost:5432/Bike_Servicing?schema=public"
- DATABASE_URL="postgresql://bike_servicing_management_8nh2_user:LFBtCSUvfy0fa5937ZV6phksz30W8SGC@dpg-d1jshji4d50c738fu6ig-a.oregon-postgres.render.com/bike_servicing_management_8nh2"
- PORT=5000
- NODE_ENV=production