document.body.innerHTML = "<h1>Hello world!</h1>";

const RingCentral = require("@rc-ex/core").default;
const WSExtension = require("@rc-ex/ws").default;

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({
    jwt: process.env.RINGCENTRAL_JWT_TOKEN,
  });

  const ext = new WSExtension();
  await rc.installExtension(ext);
  await ext.subscribe(
    ["/restapi/v1.0/account/~/extension/~/message-store"],
    (e) => {
      console.log(e);
    }
  );
  console.log("subscribed");
};
main();
