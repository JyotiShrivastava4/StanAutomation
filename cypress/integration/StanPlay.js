//Import data
//<reference types ="cypress" />
import {loginPageElements} from '../support/CommonLocator.js'
import {stan} from '../support/CommonLocator.js'
import {stanPlaypage} from '../support/CommonLocator.js'
import {StanData} from '../fixtures/StanTestdata.js'
import {StanPlayData} from '../fixtures/StanPlayTestdata.js'
import { expect } from 'chai'



describe('Automation of Stan watch', () => 
{
    //Extract data
    var sUserVal = StanData.sUsername
    var sPassVal = StanData.sPassword
    var sSeriesToSearch = StanPlayData.sSerachSeries
    var sStanPlayUrl = StanPlayData.sStanPlayURL

    //Extract locators
    var sUserLoc = loginPageElements.LOGIN_EMAIL_INPUT
    var sPassLoc = loginPageElements.LOGIN_PASSWORD_INPUT
    var sLoginLoc = loginPageElements.LOGIN_LOG_IN
    var sSearchResult = stanPlaypage.SEARCH_RESULT
    var sSearchResultItem = stanPlaypage.SEARCH_LISTITEM

    var sHeaderLoginLink = stan.HEADER_LOGIN_LINK
    var sProfileIcon = stan.PROFILE_ICON

    var sStanSearchIcon = stanPlaypage.STAN_SEARCH_ICON
    var sStanSearchTxtbox = stanPlaypage.STAN_SEARCH_TEXTBOX
    var sStanMylistBtn = stanPlaypage.STAN_MY_LIST_BUTTON
    var sStanMenu = stanPlaypage.STAN_HAMBURGER_MENU
    var sStanMyList = stanPlaypage.STAN_MY_LIST_LINK
    var sStanProgramList = stanPlaypage.STAN_PROGRAM_LIST
    var sStanRemoveBtn = stanPlaypage.STAN_REMOVE_LIST_BUTTON
    it('Test_01 - Navigate to Stan play page', function () {
      
        cy.visit(sStanPlayUrl)
        //cy.get("a").contains("Log in").click()
        cy.get(sHeaderLoginLink).click()
        cy.get(sUserLoc).should('be.visible')
        cy.EnterUsername(sUserLoc,sUserVal)
        cy.get(sPassLoc).should('be.visible')
        cy.EnterPassword(sPassLoc,sPassVal)
        cy.get(sLoginLoc).should('be.visible')
        cy.ClickOnlogin(sLoginLoc)
        cy.wait(2000)
        cy.get(sProfileIcon).click()
      })

      it('Test_02 - Search and clik on a series', function () {
        
        cy.get(sStanSearchIcon).click()
        cy.get(sStanSearchTxtbox).type(sSeriesToSearch)
        cy.wait(2000)
        cy.get(sSearchResult).find(sSearchResultItem).first().click()
        cy.wait(4000)
       //Verify if series page is displayed
        cy.get('.program__section').should('be.visible')
      })

       it('Test_03 - Add and verify series in Mylist', function () {
        cy.get(sStanMylistBtn).click()
        cy.wait(4000)
        cy.get(sStanMenu).click()
        cy.get(sStanMyList).click()
        cy.wait(2000)
        //Verify that series should be displayed in mylist
        cy.get('[alt='+ sSeriesToSearch+ ']').should('be.visible')
    })

    it('Test_04 - Remove series from Mylist', function () {
        cy.get(sStanProgramList).find('[alt='+ sSeriesToSearch+']').parent().parent().find(sStanRemoveBtn).click()
        //Verify that list should be empty
        cy.get('.my__empty').should('contain','Your My List is empty.')
    })

  })

