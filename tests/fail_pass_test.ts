import { browser, by, element, protractor } from "protractor";
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import {URL} from '../utils/constants';
import { Functions } from "../pages/functions";

describe('Yandex - Яндекс почта - невалидный пароль', () => {
    it('Invalid pass', async () => {
      await browser.get(URL);
     await HomePage.ClickOnLoginButton ();
     await Functions.openNewTab ();
     await LoginPage.inputInLoginField ();
     await LoginPage.ClickOnSubmitButton ();
     await LoginPage.FailinputInPassField ();
     await LoginPage.ClickOnSubmitButton ();
     await LoginPage.CheckErrorMessage ();
      })
            afterAll (() =>      {
                  browser.close
       })
       
         });

