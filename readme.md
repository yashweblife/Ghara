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
- [PNPM](https://pnpm.io/installation)
- [Expo](https://docs.expo.dev/get-started/introduction/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Prisma](https://www.prisma.io/docs)
- [Tailwind](https://tailwindcss.com/docs/installation/using-vite)
- [Sqlite](https://sqlite.org/docs.html)

Essential commands:

```bash

# clone the repo
git clone https://github.com/yashweblife/Ghara.git

cd Ghara
```
`ctrl`+`shift`+`p` open command pallette in vscode

`Open in Dev Container` select this option

### Setup the server `.env`

Make a new `.env` file. Copy everything from the `.env.example` into `.env`. If the port is busy, change it in your `.env` till it works

### Setup the client `Vite.config.ts`

If you had to change the server port, you will need to reflect the changes in the `vite.config.ts`

[`vite.config.ts`](./client/web/vite.config.ts#L17)

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5170', // <-- change the port here
        changeOrigin: true,
        secure: false
      }
    }
  }
  ...
```

```bash
# using pnpm to install and run
pnpm install

# dev
pnpm dev:web # web dev
pnpm dev:app # app dev
pnpm dev:server # server
```


#### If you didnt have to change anything:
The webapp should start at [this url](http://localhost:5173)<br/>
The server should start at [this url](http://localhost:5170)
