const { Button, Input } = require('../elements');

class SigninPage {
   constructor() {
      this.emailField = new Input('input[name="email"]');
      this.passwordField = new Input('input[name="password"]');
      this.signinbutton = new Button("button");
   }

   async signin({ email, password }) {
      await this.emailField.setValue(email);
      await this.passwordField.setValue(password);

      await this.signinbutton.click();
   }
}

module.exports = { SigninPage };
