import {stanWatchpage} from '../support/CommonLocator.js'
import {StanWatchData} from '../fixtures/StanWatchTestdata.js'

describe('Automation of Stan watch', () => 
{
  //Extract locators
    var sBump = stanWatchpage.SERIES_BUMP
    var sWatchBumpNow =  stanWatchpage.WATCH_BUMP_NOW
    var sTrailerExtra= stanWatchpage.EPISODES_TRAILER_EXTRA
    var sEpisodes = stanWatchpage.EPISODES_DROPDOWN
    var sStanMainPageHeader = stanWatchpage.STAN_WATCH_MAIN_PAGE_HEADER
    var sStanPlanPageHaeder = stanWatchpage.STAN_WATCH_PLAN_PAGE_HEADER

    //Extract testdata
    var sExpectedWatchPageTitle = StanWatchData.sWatchPageTitle
    var sExpectedWatchBumpTitle = StanWatchData.sBumpPageTitle
    var sExpextedTrailerAndExtraUrl = StanWatchData.sExpectedTrailerPage
    var sWatchURL = StanWatchData.sStanWatchURL
    
    it('Test_01 - Navigate to Stan watch page', function () {
      //Navigates to stan watch site
        cy.visit(sWatchURL)
        cy.url().should('contain','watch')
        cy.title().should('equal',sExpectedWatchPageTitle)
      })

      it('Test_02 - Click on Bump series', function () {
      //Click on bump series and verify that respective page should open
        cy.get(sBump).click()
        cy.url().should('contain','bump')
        cy.title().should('equal',sExpectedWatchBumpTitle)
       })

      it('Test_03 - View trailers and extras', function () {
      //slect trailer and extra for bump series from dropdown and verify that 'Trailers and Extra' page should be opened
        cy.get(sEpisodes).find(sTrailerExtra).click({force: true})
        cy.url(sStanPlanPageHaeder).should('contain',sExpextedTrailerAndExtraUrl)
      })

      it('Test_04 - Click on start your free trail button', function () {
      //Click on start free trail and verify thar plan model window should displayed
         cy.get(sStanMainPageHeader).find(sWatchBumpNow).click()
         cy.get(sStanPlanPageHaeder).should('be.visible')
      })

  })

