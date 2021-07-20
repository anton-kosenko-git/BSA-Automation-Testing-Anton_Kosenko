const { Button, Input } = require('../elements');

class EditMyProfilePage {
   constructor() {
      this.editNameField = new Input('input[placeholder="Name"]');
      this.editSurnameField = new Input('input[placeholder="Surname"]');
      this.editBirthdate = new Input('input[name="birthdate"]');
      this.editEmailField = new Input('input[placeholder="Email"]');
      this.editPhoneField = new Input('input[placeholder="Phone"]');

      this.ddls = new Button('div.selectStyles__control');
      this.genderDdl = new Button('div.selectStyles__control', 2);
      this.statusDdl = new Button('div.selectStyles__control', 3);

      this.genderOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
      this.statusOption = new Button('div.selectStyles__single-value=TEXT_TO_REPLACE');

      this.button1 = new Button('button[type="submit"]');
      this.editButton = new Button('button[type="submit"]', 2);
   }

   async editProfile({ name, surname, birthDate, email, phone, status, gender }) {

      await this.editNameField.setValue(name);

      await this.editSurnameField.setValue(surname);

      await this.genderDdl.click();
      await this.genderOption.clickByText(gender);

      await this.editBirthdate.setValue(birthDate);
      this.editSurnameField.click();

      await this.editEmailField.setValue(email);

      await this.editPhoneField.setValue(phone);

      await this.statusDdl.click();
      await this.statusOption.clickByText(status);

      await this.editButton.click();
   }

}

module.exports = { EditMyProfilePage };
