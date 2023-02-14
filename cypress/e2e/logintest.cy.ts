import { LoginPage } from "../pages/LoginPage"

let loginPage = new LoginPage
it('login test', function() {
    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUsrName('test');
    loginPage.enterPwd('test');
    loginPage.clickLogin();
})