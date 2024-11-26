# RingCentral SDK WebPack Demo

This demo project shows you how to use webpack to bundle a frontend app which depends on `@rc-ex/core` and `@rc-ex/ws`.

## "Buffer is not defined"

Browser doesn't support Buffer, you need to install and enable polyfill.

Please refer to [webpack.config.js](./webpack.config.js).

## How to run the demo

Create a `.env` file with the following credentials:

```
RINGCENTRAL_SERVER_URL=https://platform.ringcentral.com
RINGCENTRAL_CLIENT_ID=
RINGCENTRAL_CLIENT_SECRET=
RINGCENTRAL_JWT_TOKEN=
```

### To run in development env

```
yarn serve
```

## To build for production

```
yarn build
```
