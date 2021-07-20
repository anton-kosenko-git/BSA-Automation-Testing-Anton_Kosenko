const { Button, Input } = require('../elements');

class AddNewClinicPage {
   constructor() {
      this.clinicNameField = new Input('input[placeholder="Name"]');
      this.clinicAddressField = new Input('input[placeholder="Address"]');

      this.ddls = new Button('div.selectStyles__control');
      this.statusDdl = new Button('div.selectStyles__control', 0);
      this.cityDdl = new Button('div.selectStyles__control', 1);

      this.statusOption = new Button('div.selectStyles__single-value=TEXT_TO_REPLACE');
      this.cityOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

      this.addButton1 = new Button('button[type="submit"]');
   }

   async addNewClinic({ name, address, status, city }) {

      await this.clinicNameField.setValue(name);
      await this.clinicAddressField.setValue(address);

      await this.statusDdl.click();
      await this.statusOption.clickByText(status);
      await this.cityDdl.click();
      await this.cityOption.clickByText(city);

      await this.addButton1.click();
   }

}

module.exports = { AddNewClinicPage };
