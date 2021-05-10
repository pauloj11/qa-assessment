História 2: Teste da tela de Esqueci minha senha

CN01:Validação do layout da tela Esqueci minha senha
    CT01:Validação do layout da tela Esqueci minha senha
        step01: acessar 'http://localhost:3000/forgot-password' / sistema apresentado com sucesso
        step02: demonstrar fraseologia do campo de hypertexto 'Go to login' / fraseologia apresentada com sucesso
        step03: demonstrar título 'Fill the field below with your email' / título apresentado com sucesso
        step04: demonstrar título do campo de e-mail 'Email address' / título apresentado com sucesso
        step05: demonstrar fraseologia do botão de enviar 'Send' / fraseologia apresentada com sucesso

CN02:Teste de layout do campo de Email
    CT01:Validação do layout do campo de Email
        step01: preencher o campo de email e apagar o texto / Demonstrar o texto em vermelho 'Email must be provided.'
        step02: preencher o campo de email com um email inválido / Demonstrar o texto em vermelho 'Insert a valid email address.'
        step03: preencher o campo de email com um email válido / Demonstrar a não apresentação de alertas

CN03:Teste de layout do botão de envio
    CT01:Validação do layout botão de envio
        step01: preencher o campo de email com dado inválido / Demonstrar o botão de enviar indisponível
        step02: preencher o campo de email com dado válido / Demonstrar o botão de enviar disponível

CN04:Teste de link do botão 'Go to login'
    CT01:Validação do link do botão 'Go to login'
        step01: demonstrar o link '/login' presente no hypertexto 'Go to login' / Demonstrar o link com sucesso

CN05:Teste de envio do email inválido
    CT01:Validação da funcionalidade do botão de envio para email inválido
        step01: preencher o campo de email com dado válido sem cadastro / Demonstrar o botão de enviar disponível
        step02: clicar no botão de enviar / Demonstrar o texto em vermelho 'User not found.'
    CT02:Validação da funcionalidade do botão de envio para email válido
        step01: preencher o campo de email com dado válido e com cadastro / Demonstrar o botão de enviar disponível
        step02: clicar no botão de enviar / Demonstrar o pop-up com a mensagem 'Email sent.'