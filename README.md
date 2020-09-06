# Custom server with TypeScript + Nodemon example

The example shows how you can use [TypeScript](https://typescriptlang.com) on both the server and the client while using [Nodemon](https://nodemon.io/) to live reload the server code without affecting the Next.js universal code.

Server entry point is `server/index.ts` in development and `dist/index.js` in production.
The second directory should be added to `.gitignore`.

## How to use
Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```
