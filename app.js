const { Chromeless } = require('chromeless');
require('dotenv').config();

async function login(){
  const chromeless = new Chromeless();

  const screenshot = await chromeless
    .goto('https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession')
    .type(process.env.USER_EMAIL, '.whsOnd.zHQkBf')
    .click('div[id="identifierNext"]')
    .type(process.env.USER_PW, '.whsOnd.zHQkBf')
    .click('div[id="passwordNext"]')
    .wait('div[class="ds"]')
    .screenshot()

  await chromeless.end()
}

login().catch(console.error.bind(console))
