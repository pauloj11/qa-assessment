História 3:  Teste da tela Recuperar minha senha

CN01:Validação do layout da tela Recuperar minha senha
    CT01:Validação do layout da tela Recuperar minha senha
        step01: acessar 'http://localhost:3000/reset-password/user@t10.digital' / sistema apresentado com sucesso
        step02: demonstrar fraseologia do campo de hypertexto 'Go to login' / fraseologia apresentada com sucesso
        step03: demonstrar título 'Fill the field below with your email' / título apresentado com sucesso
        step04: demonstrar título do campo de senha 'New password' / título apresentado com sucesso
        step05: demonstrar título do campo de senha 'Confirm password' / título apresentado com sucesso
        step06: demonstrar fraseologia do botão de enviar 'Send' / fraseologia apresentada com sucesso

CN02:Teste de layout do campo de senha 'New password'
    CT01:Validação do layout do campo de New Password
        step01: preencher o campo de senha e apagar o texto / Demonstrar o texto em vermelho 'New password must be provided.'
        step02: preencher o campo de senha com uma senha inválida / Demonstrar o texto em vermelho 'The password must have at leat 7 characters.'
        step03: preencher o campo de senha com uma senha válida / Demonstrar a não apresentação de alertas
        step04: clicar no ícone de visibilidade de senha / Demonstrar desaparecimento da máscara de senha, apresentando os números digitados no campo
        step05: clicar no ícone de visibilidade de senha / Demonstrar o reaparecimento da máscara de senha, não apresentando os números digitados no campo

CN03:Teste de layout do campo de senha 'Confirm password'
    CT01:Validação do layout do campo de Confirm password
        step01: preencher o campo de senha e apagar o texto / Demonstrar o texto em vermelho 'Password confirmation must be provided.'
        step02: preencher o campo de senha com uma senha válida / Demonstrar a não apresentação de alertas
        step03: clicar no ícone de visibilidade de senha / Demonstrar desaparecimento da máscara de senha, apresentando os números digitados no campo
        step04: clicar no ícone de visibilidade de senha / Demonstrar o reaparecimento da máscara de senha, não apresentando os números digitados no campo

CN04:Teste de layout do botão de troca de senha
    CT01:Validação do layout botão de troca de senha
        step01: preencher os campos de senha com senhas inválidas / Demonstrar o botão de troca de senha indisponível
        step02: preencher os campos de senha com senhas válidas / Demonstrar o botão de troca de senha disponível
        step03: preencher os campos de senha com senhas válidas, porém divergentes / Demonstrar o botão de troca de senha indisponível

CN04:Teste de link do botão 'Go to login'
    CT01:Validação do link do botão 'Go to login'
        step01: demonstrar o link '/login' presente no hypertexto 'Go to login' / Demonstrar o link com sucesso

CN06:Teste do botão de troca de senha
    CT01:Validação da funcionalidade do botão de troca de senha
        step01: preencher os campos de senha com dados válidos / Demonstrar o botão de troca de senha disponível
        step02: clicar no botão de troca de senha / Demonstrar o pop-up com a mensagem 'Password updated.'