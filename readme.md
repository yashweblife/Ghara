# Ghara
#### It means home.

The project is designed to do all sorts of things that support the daily life of a person.
With the intention to keep things local and open source.

The app will be available to download in releases and you will need to self host the server.
The idea is to make it as simple as possible to set up and use.

### What does the app do

- Keep track of things you buy in a store
- Create grocery lists with an estimated price
- Curate ingredients for recipes which you can turn into a grocery list automatically
- Track weekly costs
- Assign points to your activities

and various other things. 

## For developers

Stack:
- Expo
- React Native
- Typescript
- Prisma
- Tailwind
- Sqlite

Essential commands:

```bash

# clone the repo
git clone https://github.com/yashweblife/Ghara.git

# installation
cd server && npm install
cd ..
cd client/GHARA && npm install
cd ../web/GHARA && npm install

# start the server
cd server && npm run dev

# start the client
cd ../client/GHARA && npm run start

# start the web
cd ../web/GHARA && npm run dev
```

Once we have docker integrated, these things will become easier to manage (I promise).
