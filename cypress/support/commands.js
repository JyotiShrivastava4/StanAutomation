
Cypress.Commands.add("EnterUsername",(eLocaor,username) =>
 {
    cy.get(eLocaor).type(username)
   });

   Cypress.Commands.add("EnterPassword",(pLocator,sPassword) =>
   {
      cy.get(pLocator).type(sPassword)
     });

     Cypress.Commands.add("ClickOnlogin",(sLocator) =>
    {
     cy.get(sLocator).click();

    //cy.commonfunction().selector()
    //cy.get(selectors.LOGIN_EMAIL_INPUT).type(Username)
    // cy.get('.modal__body [name="email"]').type(Username)
    // cy.get('.modal__body [name="password"]').type(Password)
    // cy.get(eLocaor).type(Username)
    // cy.get(pLocator).type(Password)
   });