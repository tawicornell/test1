
describe('http://localhost:8080/',()=>{
    describe('page loads',()=>{
       it('should load the page', ()=>{
        cy.visit('http://localhost:8080/')
       })
    })
})


describe('http://localhost:8080/',()=>{
    describe('Authentification',()=>{
       it('Registra y logea', ()=>{
        cy.visit('http://localhost:8080/')

        cy.contains('Register').click()

        cy.contains('Name').type("usuarioPrueba");
        cy.contains('Email address').type("mail@mail.com");
        cy.contains('Password').type("1234");
        cy.contains('Confirm password').type("1234");
        cy.contains('Sign in').click()

        cy.contains('Email address').type("mail@mail.com");
        cy.contains('Password').type("1234");
        cy.contains('Login').click()


       })
    })
})