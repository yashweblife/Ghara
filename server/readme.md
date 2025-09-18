# Ghara Server

This is the server for the Ghara app. it has a bunch of things going on.

- We are using prisma with sqlite as the database.
- We are using express as the server.
- Typescript is the base.

## Setting up the project for development

For now there is no docker being used so...

```bash
# Install dependencies
npm install

# Create the .env file with the environment variables
cp .env.example .env
# change the contents to your liking

# Generate the prisma client
prisma generate

# Start the server
npm run dev
```
