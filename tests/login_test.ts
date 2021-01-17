import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
let addHomePage = new HomePage ();
let addLoginPage = new LoginPage ();
      beforeAll (() =>      {
        // выключаем проверку на AngularJS
        browser.waitForAngularEnabled(false);
   })
describe('Yandex2', () => {
    it('Click login button', async () => {
        // Создаем объект для работы с ожиданиями
        const EC = protractor.ExpectedConditions;
        // открываем страницу яндекса
      await browser.get('https://yandex.by/');
      await addHomePage.ClickOnLoginButton ();
     await  browser.getAllWindowHandles().then(function(handles) {
        let newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle)     });
      await addLoginPage.inputInLoginField ();
      await addLoginPage.ClickOnSubmitButton ();
      await addLoginPage.inputInPassField ();
      await addLoginPage.ClickOnSubmitButton ();
      const UserName = element(by.css(".user-account_left-name span.user-account__name"));
      await browser.wait(EC.visibilityOf(UserName), 30000);
     console.log(await UserName.getText());
    await expect(await UserName.getText()).toEqual("javascriptpain"); 
      })
      //закрываем на всякий случай, хотя итак закроется запустить?
      afterAll (() =>      {
      browser.close
       })
       
         });
