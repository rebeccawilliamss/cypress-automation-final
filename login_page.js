class LoginPage {

}

const webElements = {
    username: '//input[@name="username"]',
    password: '//input[@name="password"]',
    signInBtn: '//button[@type="submit"]',
    newAccountLink: `//a[contains(text(), 'Create a new account')]`,
    forgotPassworkLink: `//a[contains(text(), 'Forgot password?')]`,
    enterEmail: `//input[@name="email"]`,
    recoverPasswordBtn: `//button[contains(text(), 'Recover my password')]`,
    returnHomeLink: `//a[contains(text(), 'Return Home')]`
};

export {webElements};