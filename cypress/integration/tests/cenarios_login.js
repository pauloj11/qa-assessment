describe('Teste da tela de login', function(){
    it('Validação do layout da tela de login', function(){
        cy.visit('localhost:3000/login')

        cy.url()
        .should('include', 'login')

        cy.get('.chakra-heading')
        .should('contain', 'Sign in to your account')

        cy.get('.css-9nn67z')
        .should('contain', 'Or create your account for free')

        cy.get('.css-gmuwbf > .chakra-text')
        .should('contain', 'Fill the fields below to login')
        
        cy.get('#field-1-label')
        .should('contain', 'Email address')

        cy.get('#field-2-label')
        .should('contain', 'Password')

        cy.get('.chakra-checkbox__label')
        .should('contain', 'Remember me')

        cy.get('.css-1qs0n5k > .chakra-link')
        .should('contain', 'Forgot my password')

        cy.get('[data-testid=submit-login]')
        .should('contain', 'Login')
    })

    it('Teste de layout do campo de Email', function(){

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

    it('Teste de layout do campo de senha', function(){
        cy.get('#field-2')
        .type('campovazio').clear()

        cy.get('#field-2-feedback')
        .should('contain', 'Password must be provided.')

        cy.get('#field-2')
        .type('123456')

        cy.get('#field-2-feedback')
        .should('contain', 'The password must have at leat 7 characters.')

        cy.get('#field-2').clear()
        .type('1234567')

        cy.get('.chakra-icon').click()
        cy.get('.chakra-icon').click()
    })

    it('Teste de layout do campo de lembrar usuário', function(){
        cy.get('.chakra-checkbox__control').click()
        .should('have.css', 'background-color', 'rgb(47, 133, 90)')

        cy.get('.chakra-checkbox__control').click()
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })

    it('Teste de layout do botão de login', function(){
        cy.get('#field-1').clear()
        cy.get('[data-testid=submit-login]')
        .should('have.css', 'cursor','not-allowed')

        cy.get('#field-1').type('email@teste.com')
        cy.get('[data-testid=submit-login]')
        .should('have.css', 'cursor','pointer')

    })

    it('Teste de link do botão de esquecimento de senha', function(){
        cy.get('.css-1qs0n5k > .chakra-link')
        .should('have.attr', 'href', '/forgot-password')

        cy.get('.css-1qs0n5k > .chakra-link').click()
    })

    it('Teste de login', function(){
        cy.visit('localhost:3000/login')

        cy.get('#field-1').clear()
        .type('user@t10.digital')
        .should('have.value', 'user@t10.digital')

        cy.get('#field-2').clear()
        .type('12345678')

        cy.get('[data-testid=submit-login]').click()

        cy.clearCookies()

        cy.contains('Nothing here').click()
    })
})