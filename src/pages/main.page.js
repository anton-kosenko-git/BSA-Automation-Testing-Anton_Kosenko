const { Button } = require('../elements');

class MainPage {
   constructor() {
      this.myprofileDdl = new Button("a.link_link__3zEN3=My Profile");
      this.clinicDdl = new Button('a[href="/clinics"]');

   }

   async myProfile() {
      await this.myprofileDdl.click();
   }

   async clinics() {
      await this.clinicDdl.click();
   }

}

module.exports = { MainPage };
