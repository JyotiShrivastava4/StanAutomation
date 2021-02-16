//import {} from 'F:/Cypress/Framework/cypress/support/commands.js'

const loginPageFunction = { 
    "TypeUserName":enterUsername(sUserlocator,sUserValue),
    "TypePassword": enterPassword(sPassLocator,sPassValue),
    "signIn":ClickOnlogin(sLoginLocator)
    
};
export {loginPageFunction};
