const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Edit profile test:', function () {

   // Тест-3 на зміну даних в профілі користувача.
   //1. [+]Виконати кроки з Тесту-1
   //2. [+]Натиснути на пункт меню MyProfile
   //3. [+]Натиснути на кнопку редагувати профіль
   //4. [+]Заповнити поле ім'я
   //5. [+]Заповнити поле прізвище
   //6. [+]Заповнити поле стать
   //7. [+]Натиснути на поле дата народження
   //8. [+]Обрати дату
   //9. [+]Змінити поле email
   //10. [+]Змінити поле телефон
   //11. [+]Натиснути на поле статус
   //12. [+]Обрати один з варіантів статусу
   //13. [+]Натиснути на кпопку Редагувати

   beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
   });

   afterEach(async function () {
      await browser.reloadSession();
   });

   it('Authorised user should be able to edit profile', async function () {

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
      expect(url).to.be.eql("http://46.101.234.121/doctors")
      await browser.pause(2000);

      const myprofileDdl = await $('a.link_link__3zEN3=My Profile');
      await myprofileDdl.click();
      await browser.pause(2000);

      const button = await $$("button");
      const editProfileButton = button[1];
      await editProfileButton.click();
      await browser.pause(2000);

      await app.EditMyProfilePage.editProfile({
         name: "John",
         surname: "Wick",
         birthDate: "01/01/2000",
         email: "john@gmail.com",
         phone: "80990909090",
         status: "doctor",
         gender: "male",
      });

   });
});