<p align='center' style='width:100%;text-align:center'>
  <img src='./client/web/src/assets/logo.svg' width='160'/>
</p>

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



## For developers 💻

| Projects | PNPM | EXPO | TYPESCRIPT | PRISMA | TAILWIND | SQLITE | Storybook |
| :------: | :--: | :--: | :--------: | :----: | :------: | :----: | :-------: |
| Server   | 👍   | x    | 👍         | 👍     | x        | 👍     | x         |
| WebApp   | 👍   | x    | 👍         | x      | 👍       | x      | 👍        |
| Mobile App | 👍 | 👍   | 👍         | x      | x        | x      | x         |

> ### Links For Stack:
> - [PNPM](https://pnpm.io/installation) used for package management across all projects
> - [Expo](https://docs.expo.dev/get-started/introduction/) react native wrapper for better compatibility
> - [Typescript](https://www.typescriptlang.org/docs/) used for sanity of devs
> - [Prisma](https://www.prisma.io/docs) used to manage db
> - [Tailwind](https://tailwindcss.com/docs/installation/using-vite) nice css styles
> - [Sqlite](https://sqlite.org/docs.html) lightweight db for local scalablilty
> - [Storybook](https://storybook.js.org/docs) visual curation of components

## Essential commands in steps: 👣

### Step 1 : Clone
```bash

# clone the repo
git clone https://github.com/yashweblife/Ghara.git
cd Ghara
```
### Step 2 : Dev Container
`ctrl`+`shift`+`p` open command pallette in vscode

`Open in Dev Container` select this option

### Step 3 : Server Setup

> Setup the server `.env`

Make a new `.env` file. Copy everything from the `.env.example` into `.env`. If the port is busy, change it in your `.env` till it works

### Step 4 : Client Setup
> Setup the client `vite.config.ts`

If you had to change the server port, you will need to reflect the changes in the `vite.config.ts`

Clicl here: [`vite.config.ts`](./client/web/vite.config.ts#L17)

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

### Step 5 : Install and Run Dev

```bash
# using pnpm to install and run
pnpm install

# dev
pnpm dev:web # web dev
pnpm dev:app # app dev
pnpm dev:server # server
```


#### If you didnt have to change the port:
The webapp should start at [this url](http://localhost:5173)<br/>
The server should start at [this url](http://localhost:5170)


### Further Instructions

Each project has its own readme files that tell you what to do as well, read them carefully

<img src="./client/web/src/assets/bg3.svg"/>