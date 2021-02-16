
import { expect } from 'chai'
import { beforeEach } from 'mocha'

describe('Mock API Automation', function () {

  it('Test_01 - Response from actual API', () => {

    // Navigate to the URL and verify if response are getting from actual API 
    cy.visit('https://jsonplaceholder.cypress.io/')
    cy.get('#run-button').click()
    cy.request('https://jsonplaceholder.cypress.io/todos/1').should((response)=>{
      cy.log(response.body.title)
      expect(response.body.title).equal('delectus aut autem')
      cy.log(response.body.id)
      expect(response.body.id).equal(1)
      cy.log(response.body.userId)
      expect(response.body.userId).equal(1)
      cy.log(response.body.completed)
      expect(response.body.completed).equal(false)
    })
  })
  
  
  it('Test_02 - Response from Mock', () => {
   // Navigate to the URL and mock the response from fixtures/MockData.json file and 
   //verify if response are properly mocked for not 
    cy.visit('https://jsonplaceholder.cypress.io/')

    // add alias 'GetComment'
    cy.intercept('GET', '**/todos/*',{fixture:'MockData.json'}).as('getComment')  
    cy.get('#run-button').click()

    //wait to get response back from mock
    cy.wait('@getComment').should(({response}) => {                               
      cy.log(response.body.title)
      expect(response.body.title).equal('This is the mock response')
      cy.log(response.body.id)
      expect(response.body.id).equal(1)
      cy.log(response.body.userId)
      expect(response.body.userId).equal('Mock001')
      cy.log(response.body.completed)
      expect(response.body.completed).equal(true)
    })
    })

  })