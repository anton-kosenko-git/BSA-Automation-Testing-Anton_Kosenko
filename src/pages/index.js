const { SigninPage } = require('./signin.page');
const { MainPage } = require('./main.page');
const { MyProfilePage } = require('./myprofile.page');
const { EditMyProfilePage } = require('./editprofile.page');
const { ClinicsPage } = require('./clinics.page');
const { AddNewClinicPage } = require('./addnewclinic.page');

class App {
  constructor() {
    this.SigninPage = new SigninPage();
    this.MainPage = new MainPage();
    this.MyProfilePage = new MyProfilePage();
    this.EditMyProfilePage = new EditMyProfilePage();
    this.ClinicsPage = new ClinicsPage();
    this.AddNewClinicPage = new AddNewClinicPage();
  }
}

module.exports = { App };
