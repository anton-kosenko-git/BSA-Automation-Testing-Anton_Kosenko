const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Login positive and negative tests:', function () {

   //Тест-1 на логін.
   //1. [+]перехід по url
   //2. [+]заповнення поля логіну 
   //3. [+]заповнення поля паролю +
   //4. [+]натиснути на кропку login +

   beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
   });

   afterEach(async function () {
      await browser.reloadSession();
   });

   it('User should be able to login with valid login and password', async function () {

      await app.SigninPage.signin({
         email: "john_admin1@admin.com",
         password: "Pa55word",
      });

      await browser.waitUntil(async function () {
         const url = await browser.getUrl();
         return url === "http://46.101.234.121/doctors";
      }, { timeout: 5000 },
      );
      expect(url).to.be.eql("http://46.101.234.121/doctors")

   });

   // Тест-2 на логін с невалідними даними.
   //1. [+]перехід по url 
   //2. [+]заповнення поля логіну 
   //3. [+]заповнення поля невалідними даними 
   //4. [+]натиснути на кропку login
   it('User see error message and could not login while enter a wrong password', async function () {

      await app.SigninPage.signin({
         email: "john_admin1@admin.com",
         password: "Pa55word",
      });

      await browser.waitUntil(async function () {
         const url = await browser.getUrl();
         return url === "http://46.101.234.121/doctors";
      }, { timeout: 5000 },
      );

      expect(url).to.be.eql("http://46.101.234.121/doctors")
      await browser.pause(2000);
   });
});

