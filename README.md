# StanAutomation

How to run the project:
1. Download the project from git repository. Open the project in Visual Studio Code.
2. Download Node using this URL: https://nodejs.org/en/download/current/

Prerequisite : Download and install
- Mocha 
- Chai
- Mochawesome
- Cypress

 How did you decide on the structure and framework of your solution?
 
-To Separate the test data from test scripts I have kept my test data in a file under fixtures. This makes the framework easy to handle and maintain.
Reusable functions are kept in support - command.js, so that they all are located at one place and can be reused any number of times in the test scripts.
I have created 3 differnt test scenario .Js files and inside these files I have my different  test cases in different it blocks.


 Are there any improvements you could make to your submission?
 
-I could have made reporting better by using macha merge and report generator to generate 1 single report for my differnt test cases.
 But here I chose to have one separate html report file for each test script.


 What would you do differently if you were allocated more time?
 
-If there was more time I would have added more test cases and more validations on the page.
I tried to cover as much as I could in the given timeframe.



 Add a script in your package.json file for kicking off your tests on the URLS specified.
 
- Below are the scripts to run test scripts on different pages.

    "cy:run:chrome" - To run all the test cases on chrome browser
    
    "cy:run:firefox" - To run all the test cases on firefox browser
    
    "cy:run:stan" - To run all the test cases for stan page
    
    "cy:run:stanplay" - To run all the test cases for stan play page
    
    "cy:run:stanwatch" - - To run all the test cases for stan watch page
    
    "cy:run:api" - - To run all the test cases for API
    "cy:run:mock" - To run all the test cases for Mocks

 
