const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Edit doctors speciality and cliniks:', function () {

   // Тест-4 на зміну спеціальності та клініки для доктора.
   //1. [+]Виконати кроки 1-2 з Тесту-3
   //2. [+]Обрати один з варіантів спеціальності
   //3. [+]Натиснути кнопку зберегти біля вікна спеціальності
   //4. [+]Натиснути на вікно обрати клініку
   //5. [+]Обрати один з варіантів клініки
   //6. [+]Натиснути на кнопку зберегти біля вікна клініка
   //7. [+]Натиснути на кнопку завантажити документ

   beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
   });

   afterEach(async function () {
      await browser.reloadSession();
   });

   it('Authorised user should be able to edit data about user speciality and place of work', async function () {

      await app.SigninPage.signin({
         email: "john_admin1@admin.com",
         password: "Pa55word",
      });

      await browser.waitUntil(async function () {
         const url = await browser.getUrl();
         return url === "http://46.101.234.121/doctors";
      }, { timeout: 5000 },
      );

      const url = await browser.getUrl();
      const myprofileDdl = await $('a.link_link__3zEN3=My Profile');

      expect(url).to.be.eql("http://46.101.234.121/doctors")
      await browser.pause(2000);


      await myprofileDdl.click();
      await browser.pause(2000);

      await app.MyProfilePage.editData({
         speciality: "pediatrician",
         clinic: "Cleveland Clinic",
      });

   });
});