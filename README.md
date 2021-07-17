## Preconditions
 - Install NodeJS LTS Version.
 - Any IDE for example VSCode.
 - Install/Update Chrome Browser to latest stable version.

## Prepare environment
  - Go to the Root folder
  - Install JS dependencies - ``` npm install ```
## Running Automation Tests
  - From the command line - ``` npm run test ```

## Structure of the project
```sh
├───output
├───helpers
├───src
    ├───elements
    ├───pages
├───specs
    ├───.spec.js
 ```
 
***helpers*** - directory with additional helpers that extends base API.  </br> 
***specs*** - folder with tests. </br> 
***src*** - folder contains our Page Object/Page Fragments and elements wrappers. </br> 




## Nuances for working with PageObjects
 - Name of the file with PageObjects should be talkable, so it is clear what's inside. Pattern of the file name [componentName].[page/fragment].js. 
 - All the selectors/locators are stored in the PageObjects. Locator should have comment where it is situated on the page, and what it is.
 - Locator priority: Id, CSS, XPath.
 - Repeatable steps in the tests write in the PageObjects as a method.

## Nuances for writing tests
Name of the test should be talkable, so one can define what test about. Follow next pattern [acceptance | E2E | integration].[name].spec.js

Name Scenario - use case or story with acceptance criteria in the name. Follow the rule - When->Then.

***Example:*** Unauthorised user goes to the welcome page. The user should be redirected to login page and see the login form to authorize

### Steps of the test should be described from the end-user perspective and should be talkable.

  - All the selectors should be located inside the pageObjects
  - All the timeouts should be located inside the pageObjects
  - All tests you implement should be easy to customize.
  
 ***WaitUntil should be used most of the time, cause sometimes chromium can move forward without loading whole page.***

## Useful links
- [WebDriverIO](https://webdriver.io) - Useful to learn how it works
- [MochaJS](https://mochajs.org/api/mocha) - Useful to learn additional commands for our test runner 
- [Chai](https://www.chaijs.com/api/assert/) - assertion library. Extends the NodeJS's assert.



## Useful materials for locators/selectors 
- [DOM tree](https://learn.javascript.ru/dom-nodes)
- [Xpath Manual](https://docs.google.com/document/d/1PdfKMDfoqFIlF4tN1jKrOf1iZ1rqESy2xVMIj3uuV3g/pub)
- [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Selectors Tester](https://www.w3schools.com/cssref/trysel.asp)
