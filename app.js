const { Chromeless } = require('chromeless');
require('dotenv').config();

async function login(){
  const chromeless = new Chromeless({
    scrollBeforeClick: false,
    debug: true,
    implicitWait: true
  });
  var emails = process.env.USER_EMAIL.split(',')
  for (i = 0; i < emails.length; i++){
    console.log(i)
    const likeVideo = await chromeless
      .goto('https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession')
      .type(emails[i], '.whsOnd.zHQkBf')
      .click('div[id="identifierNext"]')
      .wait('div[id="passwordNext"]')
      .type(process.env.USER_PW, '.whsOnd.zHQkBf')
      .click('div[id="passwordNext"]')
      .wait('div[class="ds"]')
      .goto('https://www.youtube.com/')
      .goto('https://www.youtube.com/watch?v=urtiMOp6BTU')
      .wait('button[data-post-action="/service_ajax?name=likeEndpoint"]')
      .wait(1000)
      .mousedown('button[data-post-action="/service_ajax?name=likeEndpoint"]')
      .mouseup('button[data-post-action="/service_ajax?name=likeEndpoint"]')
      .click('button[data-post-action="/service_ajax?name=likeEndpoint"]')
    await chromeless.end()
  }
}

login().catch(console.error.bind(console))
