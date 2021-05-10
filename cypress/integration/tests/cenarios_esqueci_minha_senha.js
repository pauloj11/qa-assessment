describe('Teste da tela de Esqueci minha senha', function(){
    it('Validação do layout', function(){
        cy.visit('http://localhost:3000/forgot-password')

        cy.url()
        .should('include', 'forgot-password')

        cy.get('.chakra-link')
        .should('contain', 'Go to login')

        cy.get('.chakra-text')
        .should('contain', 'Fill the field below with your email')

        cy.get('#field-1-label')
        .should('contain', 'Email address')
        
        cy.get('[data-testid=submit-forgot]')
        .should('contain', 'Send')
    })

    it('Teste do campo Email', function(){

        cy.get('#field-1')
        .type('campovazio').clear()

        cy.get('#field-1-feedback')
        .should('contain', 'Email must be provided.')

        cy.get('#field-1')
        .type('emailinvalido')
        .should('have.value', 'emailinvalido')

        cy.get('#field-1-feedback')
        .should('contain', 'Insert a valid email address.')

        cy.get('#field-1').clear()
        .type('email@teste.com')
        .should('have.value', 'email@teste.com')
    })

    it('Teste botão "Send"', function(){
        cy.get('#field-1').clear()
        cy.get('[data-testid=submit-forgot]')
        .should('have.css', 'cursor','not-allowed')

        cy.get('#field-1').type('email@teste.com')
        cy.get('[data-testid=submit-forgot]')
        .should('have.css', 'cursor','pointer')

    })

    it('Teste link "Go to login"', function(){
        cy.get('.chakra-link')
        .should('have.attr', 'href', '/login')

        cy.get('.chakra-link').click()
    })



    it('Teste de envio do email válido', function(){
        cy.visit('http://localhost:3000/forgot-password')
        cy.get('#field-1').clear().type('user@t10.digital', {delay: 100})
        .should('have.value', 'user@t10.digital')

        cy.get('[data-testid=submit-forgot]').click()

        cy.get('.Toastify__toast-body')
        .should('contain', 'Email sent.')
    })

    it('Teste de envio do email inválido', function(){
        cy.get('#field-1').clear().type('teste@teste.com', {delay: 100})
        .should('have.value', 'teste@teste.com')

        cy.get('[data-testid=submit-forgot]').click()
        
        cy.get('.css-1ddh452 > .chakra-text')
        .should('contain', 'User not found')

    })
})