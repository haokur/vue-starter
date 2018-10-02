/// <reference types="Cypress" />

describe('just test visit usage',()=>{
    it('it can visit a website',()=>{
        cy.visit('/')

        cy.contains('double eleven')
    })
})
