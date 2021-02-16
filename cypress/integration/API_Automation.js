import { expect } from 'chai'

describe('API Automation Sample', function () 
{
    it('Test_01 - Verify GET API status code', function () {
      
      //Call get API and verify response is 200 
        cy.request("GET",'https://postman-echo.com/get?foo1=bar1&foo2=bar2')
        .its('status').should('be.equal',200)
      })

    it('Test_02 - Verify GET API response body', function ()
    {
        //Call get API and verify its response body 
        cy.request('https://postman-echo.com/get?foo1=bar1&foo2=bar2').then((res) =>{
        cy.log(res.body.args)
        expect(res.body.args).has.property('foo1','bar1')
        cy.log(res.body.url)
        expect(res.body.url).equal('https://postman-echo.com/get?foo1=bar1&foo2=bar2')

        })
    })

    it('Test_03 - Verify POST API status code', function () {
      //Call post API along with request body and verify its status code
        cy.request("POST",'https://postman-echo.com/post',{foo1:'bar1',foo2:'bar2'}).then((res) =>
        {
          cy.log(res.status)
          expect(res.status).equal(200)
        })
      })


      it('Test_04 - Verify POST API response body', function () {
        //Call post along with request body and verify its response
        cy.request("POST",'https://postman-echo.com/post',{foo1:'bar1',foo2:'bar2'}).then((res) =>
        {
          cy.log(res.body.json)
          expect(res.body.json).has.property('foo1','bar1')
          expect(res.body.headers).has.property('host','postman-echo.com')
          expect(res.body.headers).has.property('x-forwarded-proto','https')
        })
        
      })

  })