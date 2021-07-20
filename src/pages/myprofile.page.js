const { Button } = require('../elements');

class MyProfilePage {
   constructor() {
      this.ddls = new Button('div.selectStyles__control');
      this.specialityDdl = new Button('div.selectStyles__control', 0);
      this.clinicDdl = new Button('div.selectStyles__control', 1);

      this.specialityOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

      this.clinicOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

      this.saveButton = new Button('button[type="submit"]', 0);
      this.saveButton1 = new Button('button[type="submit"]', 1);
      this.uploadButton = new Button('span[class="styles_uploadDocument__3LiqS"]');

   }

   async editData({ speciality, clinic }) {

      await this.specialityDdl.click();
      await this.specialityOption.clickByText(speciality);
      await this.saveButton.click();

      await this.clinicDdl.click();
      await this.clinicOption.clickByText(clinic);
      await this.saveButton1.click();

      await this.uploadButton.click();
   }

}

module.exports = { MyProfilePage };
