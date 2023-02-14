export class LoginPage {

    loginPage_uname = '#uname'
    loginPage_pwd = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigate(url: string) {
        cy.visit(url)
    }
    enterUsrName(uname: string) {
        cy.get(this.loginPage_uname).type(uname)
    }
    enterPwd(pwd: string) {
        cy.get(this.loginPage_pwd).type(pwd)
    }
    clickLogin() {
        cy.get(this.loginPage_loginButton).click()
    }
}