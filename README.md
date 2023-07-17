# Cypress practice

## Set up

1. Clone down this repo. Install dependencies.
1. Clone down the [backend repo](https://github.com/turingschool-examples/react-practice-servers). Install dependencies.
1. Fire up API server (follow the instructions in that server's README).
1. Fire up the UI server (`npm start`).

## Explore

1. Play with the FE.
1. Look over the code.

## Instructions
1. Start by pseudocoding or diagramming out how your application works. How do users interact with it? When are network requests being triggered? How does data flow through it?
1. What things do we need to test?   Identify at least 5 user flows
1. Determine how to organize the tests for these user flows in different spec files.
1. Test all 5 (or more) user flows
1. Intercept all network requests and stub mock responses that closely match what the real responses would be.
  * For at least one intercept, you should [create an alias and use wait() to wait for that alias](https://docs.cypress.io/guides/guides/network-requests#Waiting) before running your assertions
  * How can you tell if they're being intercepted/stubbed successfully?

Consider:  How would you approach writing tests to meet the following requirements?
* Write tests covering what should be displayed on the page when the user first visits.
* Write a test that checks that when data is put into the form, the value is reflected in that form input.
* Write a test to check the user flow of adding a new sighting to the DOM.

