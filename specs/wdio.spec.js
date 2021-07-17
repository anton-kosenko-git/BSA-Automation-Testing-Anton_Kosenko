const { expect } = require('chai');

const randomNumber = () => Math.floor(Math.random() * 1000);

describe('Login positive test:', function () {

  //Тест-1 на логін.
  //1. [+]перехід по url
  //2. [+]заповнення поля логіну 
  //3. [+]заповнення поля паролю +
  //4. [+]натиснути на кропку login +
  xit('should be able to login', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    await emailField.setValue('john_admin1@admin.com');
    await browser.pause(1000);
    const passwordField = await $('input[name="password"]');
    await passwordField.setValue('Pa55word');
    await browser.pause(1000);

    const signinbutton = await $("button");
    await signinbutton.click();

    await browser.waitUntil(async function () {
      const url = await browser.getUrl();
      return url === "http://46.101.234.121/doctors";
    }, { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql("http://46.101.234.121/doctors")

    await browser.reloadSession();
  });
});

describe('Login negative test:', function () {

  // Тест-2 на логін с невалідними даними.
  //1. [+]перехід по url 
  //2. [+]заповнення поля логіну 
  //3. [+]заповнення поля невалідними даними 
  //4. [+]натиснути на кропку login
  xit('wrong password', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');
    //await browser.pause(1000);

    const passwordField = await $('input[name="password"]');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue("$(rundomNumber)");
    //await browser.pause(1000);

    const signinbutton = await $("button");
    await signinbutton.click();

    await browser.waitUntil(async function () {
      const url = await browser.getUrl();
      return url === "http://46.101.234.121/doctors";
    }, { timeout: 5000 },
    );
    //await browser.pause(1000);

    const url = await browser.getUrl();
    expect(url).to.be.eql("http://46.101.234.121/doctors")
    await browser.pause(2000);
    //await browser.reloadSession();
  });
});

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
  xit('it should be able to edit profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    const passwordField = await $('input[name="password"]');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    const signinbutton = await $("button");
    await signinbutton.click();

    await browser.waitUntil(async function () {
      const url = await browser.getUrl();
      return url === "http://46.101.234.121/doctors";
    }, { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql("http://46.101.234.121/doctors")
    await browser.pause(2000);

    const myprofileOidl = await $('a[href="/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265"]');
    await myprofileOidl.click();
    await browser.pause(2000);

    const button = await $$("button");
    const editProfileButton = button[1];
    await editProfileButton.click();
    await browser.pause(2000);

    const editNameField = await $('input[placeholder="Name"]');
    await editNameField.waitForDisplayed({ timeout: 5000 });
    await editNameField.setValue('Sam');

    const editSurnameField = await $('input[placeholder="Surname"]');
    await editSurnameField.waitForDisplayed({ timeout: 5000 });
    await editSurnameField.setValue('Smith');
    await browser.pause(2000);

    const oidls = await $$("div.selectStyles__control");
    const genderOidl = oidls[2];
    await genderOidl.click();
    const femaleOption = await $("div.selectStyles__single-value=female");
    await femaleOption.click();
    await browser.pause(2000);

    const editBirthdate = await $('input[name="birthdate"]');
    await editBirthdate.waitForDisplayed({ timeout: 5000 });
    await editBirthdate.setValue('01/01/2000');
    editSurnameField.click();
    await browser.pause(2000);

    const editEmailField = await $('input[placeholder="Email"]');
    await editEmailField.waitForDisplayed({ timeout: 5000 });
    await editEmailField.setValue('smith@gmail.com');
    await browser.pause(2000);

    const editPhoneField = await $('input[placeholder="Phone"]');
    await editPhoneField.waitForDisplayed({ timeout: 5000 });
    await editPhoneField.setValue('380990000000');
    await browser.pause(2000);

    const doctorOidl = oidls[3];
    await doctorOidl.click();
    const doctorOption = await $("div.selectStyles__single-value=doctor");
    await doctorOption.click();
    await browser.pause(2000);

    const button1 = await $$('button[type="submit"]');
    const editButton = button1[2];
    await editButton.click();
    await browser.pause(2000);
  });
});

describe('Edit doctors speciality and cliniks:', function () {

  // Тест-4 на зміну спеціальності та клініки для доктора.
  //1. [+]Виконати кроки 1-2 з Тесту-3
  //2. [-]Обрати один з варіантів спеціальності
  //3. [+]Натиснути кнопку зберегти біля вікна спеціальності
  //4. [+]Натиснути на вікно обрати клініку
  //5. [+]Обрати один з варіантів клініки
  //6. [+]Натиснути на кнопку зберегти біля вікна клініка
  //7. [+]Натиснути на кнопку завантажити документ
  it('it should be able to edit profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    const passwordField = await $('input[name="password"]');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    const signinbutton = await $("button");
    await signinbutton.click();

    await browser.waitUntil(async function () {
      const url = await browser.getUrl();
      return url === "http://46.101.234.121/doctors";
    }, { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql("http://46.101.234.121/doctors")
    await browser.pause(2000);

    const myprofileOidl = await $('a[href="/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265"]');
    await myprofileOidl.click();
    await browser.pause(2000);

    const oidls = await $$("div.selectStyles__control");
    const specialityOidl = oidls[0];
    await specialityOidl.click();
    // const specialityOption = await $("div.selectStyles__placeholder=pediatrician");
    // await specialityOption.click();
    // await browser.pause(2000);

    const button1 = await $$('button[type="submit"]');
    const saveButton = button1[0];
    await saveButton.click();
    await browser.pause(2000);

    const clinicOidl = oidls[1];
    await clinicOidl.click();
    const clinicOption = await $("div.selectStyles__single-value=The Johns Hopkins Hospital");
    await clinicOption.click();
    await browser.pause(2000);

    const saveButton1 = button1[1];
    await saveButton1.click();
    await browser.pause(2000);

    const uploadButton = await $('span[class="styles_uploadDocument__3LiqS"]');
    await uploadButton.click();
    await browser.pause(2000);
  });
});

describe('Edit doctors speciality and cliniks:', function () {

  // Тест-5 на додавання нової клініки.
  //1. [+]Виконати кроки з Тесту-1
  //2. [+]Натиснути на пункт меню Clinics
  //3. [+]Натиснути на кнопку додати
  //4. [+]Заповнити поле ім'я
  //5. [+]Заповнити поле адреса
  //6. [+]Натиснути на меню статус
  //7. [+]Обрати один із варіантів статусу
  //8. [+]Натиснути на меню місто  
  //9. [-]Обрати місто
  //10. [+]Натиснути на кпопку Додати
  //11. [+]Перевірити дані
  xit('it should be able to edit profile', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    const passwordField = await $('input[name="password"]');
    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    const signinbutton = await $("button");
    await signinbutton.click();

    await browser.waitUntil(async function () {
      const url = await browser.getUrl();
      return url === "http://46.101.234.121/doctors";
    }, { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql("http://46.101.234.121/doctors")
    await browser.pause(2000);

    const clinicOidl = await $('a[href="/clinics"]');
    await clinicOidl.click();
    await browser.pause(2000);

    const button1 = await $$('button[type="button"]');
    const addButton = button1[1];
    await addButton.click();
    await browser.pause(2000);

    const clinicNameField = await $('input[placeholder="Name"]');
    await clinicNameField.waitForDisplayed({ timeout: 5000 });
    await clinicNameField.setValue('Medical center');

    const clinicAddressField = await $('input[placeholder="Address"]');
    await clinicAddressField.waitForDisplayed({ timeout: 5000 });
    await clinicAddressField.setValue('Kyiv, Peremohy avenue, 8');

    const oidls = await $$("div.selectStyles__control");
    const statusOidl = oidls[0];
    await statusOidl.click();
    const statusOption = await $("div.selectStyles__single-value=state");
    await statusOption.click();
    await browser.pause(2000);

    const cityOidl = oidls[1];
    await cityOidl.click();
    await browser.pause(5000);
    const cityOption = await $("div.selectStyles__single-value=New York, NY");
    await cityOption.click();
    await browser.pause(2000);

    // const saveButton1 = button1[1];
    // await saveButton1.click();
    // await browser.pause(2000);

    const addButton1 = await $('button[type="submit"]');
    await addButton1.click();
    await browser.pause(2000);
  });
});