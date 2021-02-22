
import {StanData} from '../fixtures/StanTestdata.js'
import {loginPageElements} from '../support/CommonLocator.js'
import {stan} from '../support/CommonLocator.js'

describe('Automation of Stan ', () => 
{
  //Extracting value from test data file
    var sStanUrl = StanData.sStanURL
    var sUserVal = StanData.sUsername
    var sPassVal = StanData.sPassword
    var sName = StanData.sProfileName
    var sNewName = StanData.sNewProfileName
    var sFinalName =""
 //Extracting locators from locator file
    var sPassLoc = loginPageElements.LOGIN_PASSWORD_INPUT
    var sLoginLoc = loginPageElements.LOGIN_LOG_IN
    var sUserLoc = loginPageElements.LOGIN_EMAIL_INPUT

    var sHeaderLoginLink = stan.HEADER_LOGIN_LINK
    var sProfileButton = stan.PROFILE_BUTTON
    var sProfileOverlay = stan.PROFILE_OVERLAY
    var sProfileNameTxtbox = stan.PROFILE_NAME_TXTBX
    var sCancelButton = stan.CANCEL_BUTTON 
    var sSaveButton = stan.SAVE_BUTTON
    var sProfileNameLabel = stan.PROFILE_NAME_LABEL  
    

    it('Test_01 - Navigate to Stan login page', function () {
      
      //Go to stan, Enter username, password and click on login page
        cy.visit(sStanUrl)
        cy.get(sHeaderLoginLink).click()
        cy.get(sUserLoc).should('be.visible')
        cy.EnterUsername(sUserLoc,sUserVal)
        cy.get(sPassLoc).should('be.visible')
        cy.EnterPassword(sPassLoc,sPassVal)
        cy.get(sLoginLoc).should('be.visible')
        cy.ClickOnlogin(sLoginLoc)

        //verify that profile name should be visible
        cy.get(sProfileButton).should('be.visible')
      })

      
    it('Test-02 - Edit Customer Profile', () => {
      //Edit profile name
      cy.get(sProfileButton).should('be.visible')
      cy.get(sProfileButton).click()
      cy.get(sProfileOverlay).click()
      cy.get(sProfileNameTxtbox).should('be.visible')
      cy.get(sProfileNameTxtbox).invoke('val').then(val=>{
        cy.log("Value:"+val)
        //Change profile name from Jyoti to Jyoti shrivastava and vice versa
        if(val==sName)
        {
          sFinalName = sNewName
          cy.log(sName)
          cy.get(sProfileNameTxtbox).clear()
          cy.get(sProfileNameTxtbox).type(sFinalName)
        }
        else
        {
          sFinalName = sName
          cy.get(sProfileNameTxtbox)
          cy.get(sProfileNameTxtbox).clear()
          cy.get(sProfileNameTxtbox).type(sName)
        }
      })
      cy.get(sCancelButton).should('be.visible')
      cy.get(sSaveButton).should('be.visible')
      cy.get(sSaveButton).click()
      cy.wait(2000)
      //Verify that changes name should displayed on profile
      cy.get(sProfileNameLabel).then((res)=>{
        expect(res).to.have.text(sFinalName)
      })
      
    
  })

  })