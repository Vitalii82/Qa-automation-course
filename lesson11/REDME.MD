# Lesson 11 - Mocking in unit testing

## This lesson covers the following topics:

1. **Mocha + Sinon.js**
2. **Vitest (Jest) inbuilt mocking support**

During this lesson we tried to test isolated service that process queries returned from DB.
To do isolation we mocked improvised dbConnection that communicates with DB by a mock to be able to create instance of our service.
Once the service instance is created there are no problems to cover it with the unt tests

## How to Run the Code

see in the framework's dir