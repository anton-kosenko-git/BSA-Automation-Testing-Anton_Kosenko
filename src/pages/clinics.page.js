const { Button } = require('../elements');

class ClinicsPage {
   constructor() {
      this.addButton = new Button('button[type="button"]', 1);

   }

   async addClinic() {
      await this.addButton.click();
   }
}

module.exports = { ClinicsPage };
