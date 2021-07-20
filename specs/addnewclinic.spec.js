const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Add new clinic:', function () {

   // Тест-5 на додавання нової клініки.
   //1. [+]Виконати кроки з Тесту-1
   //2. [+]Натиснути на пункт меню Clinics
   //3. [+]Натиснути на кнопку додати
   //4. [+]Заповнити поле ім'я
   //5. [+]Заповнити поле адреса
   //6. [+]Натиснути на меню статус
   //7. [+]Обрати один із варіантів статусу
   //8. [+]Натиснути на меню місто  
   //9. [+]Обрати місто
   //10. [+]Натиснути на кпопку Додати
   //11. [+]Перевірити дані

   beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
   });

   afterEach(async function () {
      await browser.reloadSession();
   });

   it('Authorised user should be able to add new clinic', async function () {

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

      const clinicDdl = await $('a[href="/clinics"]');
      await clinicDdl.click();
      await browser.pause(2000);

      await app.ClinicsPage.addClinic();

      // const button1 = await $$('button[type="button"]');
      // const addButton = button1[1];
      // await addButton.click();
      // await browser.pause(2000);

      await app.AddNewClinicPage.addNewClinic({
         name: "Adria Clinic",
         address: "1 Avenue",
         status: "state",
         city: "Washington",
      });

   });
});