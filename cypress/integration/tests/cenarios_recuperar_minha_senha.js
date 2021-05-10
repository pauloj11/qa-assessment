describe('Teste da tela de Recuperar minha senha', function(){
    it('Validação do layout da tela Recuperar minha senha', function(){
        cy.visit('http://localhost:3000/reset-password/user@t10.digital')

        cy.url()
        .should('include', 'reset-password')

        cy.get('.chakra-link')
        .should('contain', 'Go to login')

        cy.get('.chakra-text')
        .should('contain', 'Fill the form to reset your password')

        cy.get('#field-1-label')
        .should('contain', 'New password')
        
        cy.get('#field-2-label')
        .should('contain', 'Confirm password')

        cy.get('[data-testid=submit-reset]')
        .should('contain', 'Change password')
    })

    it('Teste de layout do campo "New password"', function(){
        cy.get('#field-1')
        .type('campovazio').clear()

        cy.get('#field-1-feedback')
        .should('contain', 'New password must be provided.')

        cy.get('#field-1')
        .type('123456')

        cy.get('#field-1-feedback')
        .should('contain', 'The password must have at leat 7 characters.')

        cy.get('#field-1').clear()
        .type('1234567')

        cy.get('.css-1bpnzr3 > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button').click()
        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button').click()
    })

    
    it('Teste de layout do campo "Confirm password"', function(){
        cy.get('#field-2')
        .type('campovazio').clear()

        cy.get('#field-2-feedback')
        .should('contain', 'Password confirmation must be provided.')

        cy.get('#field-2')
        .type('123456')

        cy.get('#field-2').clear()
        .type('1234567')

        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button').click()
        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button').click()
    })

    it('Teste de layout do botão de troca de senha', function(){
        cy.get('#field-1').clear()
        cy.get('#field-2').clear()
        cy.get('[data-testid=submit-reset]')
        .should('have.css', 'cursor','not-allowed')

        cy.get('#field-1').type('12345678')
        cy.get('#field-2').type('12345678')
        cy.get('[data-testid=submit-reset]')
        .should('have.css', 'cursor','pointer')

        cy.get('#field-1').clear().type('12345678')
        cy.get('#field-2').clear().type('12345671')
        cy.get('[data-testid=submit-reset]')
        .should('have.css', 'cursor','not-allowed')
    })

    it('Teste de link do botão "Go to login"', function(){
        cy.get('.chakra-link')
        .should('have.attr', 'href', '/login')

        cy.get('.chakra-link').click()
    })

    it('Teste do botão de troca de senha', function(){
        cy.visit('http://localhost:3000/reset-password/user@t10.digital')
        cy.get('#field-1').clear().type('12345678', {delay: 100})
        cy.get('#field-2').clear().type('12345678', {delay: 100})

        cy.get('[data-testid=submit-reset]').click()

        cy.get('.Toastify__toast-body')
        .should('contain', 'Password updated.')
    })
})