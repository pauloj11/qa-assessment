História 1: Teste da tela de login

CN01:Validação do layout da tela de login
    CT01:Validação do layout da tela de login
        step01: acessar 'localhost:3000/login' / sistema apresentado com sucesso
        step02: demonstrar título 'Sign in to your account' / título apresentado com sucesso
        step03: demonstrar subtítulo 'Or create your account for free' / subtítulo apresentado com sucesso
        step04: demonstrar título 'Fill the fields below to login' / título apresentado com sucesso
        step05: demonstrar título do campo de e-mail 'Email address' / título apresentado com sucesso
        step06: demonstrar título do campo de senha 'Password' / título apresentado com sucesso
        step07: demonstrar fraseologia do campo lembre-me 'Remember me' / fraseologia apresentada com sucesso
        step08: demonstrar fraseologia do campo de hypertexto esqueci minha senha 'Forgot my password' / título apresentado com sucesso
        step09: demonstrar fraseologia do botão de acesso 'Login' / fraseologia apresentada com sucesso

CN02:Teste de layout do campo de Email
    CT01:Validação do layout do campo de Email
        step01: preencher o campo de email e apagar o texto / Demonstrar o texto em vermelho 'Email must be provided.'
        step02: preencher o campo de email com um email inválido / Demonstrar o texto em vermelho 'Insert a valid email address.'
        step03: preencher o campo de email com um email válido / Demonstrar a não apresentação de alertas

CN03:Teste de layout do campo de senha
    CT01:Validação do layout do campo de senha
        step01: preencher o campo de senha e apagar o texto / Demonstrar o texto em vermelho 'Password must be provided.'
        step02: preencher o campo de senha com uma senha inválida / Demonstrar o texto em vermelho 'The password must have at leat 7 characters.'
        step03: preencher o campo de senha com uma senha válida / Demonstrar a não apresentação de alertas
        step04: clicar no ícone de visibilidade de senha / Demonstrar desaparecimento da máscara de senha, apresentando os números digitados no campo
        step05: clicar no ícone de visibilidade de senha / Demonstrar o reaparecimento da máscara de senha, não apresentando os números digitados no campo

CN04:Teste de layout do campo de lembrar usuário
    CT01:Validação do layout do campo de lembrar usuário
        step01: clicar no checkbox 'Remember me' / Demonstrar o checkbox marcado com sucesso
        step02: clicar no checkbox 'Remember me' / Demonstrar o checkbox desmarcado com sucesso

CN05:Teste de layout do botão de login
    CT01:Validação do layout do botão de login
        step01: preencher o campo de login e senha com dados inválidos / Demonstrar o botão de login indisponível
        step02: preencher o campo de login e senha com dados válidos / Demonstrar o botão de login disponível

CN06:Teste de link do botão de esquecimento de senha
    CT01:Validação do link do botão de esquecimento de senha
        step01: demonstrar o link '/forgot-password' presente no hypertexto 'Forgot my password' / Demonstrar o link com sucesso

CN07:Teste de login válido
    CT01:Validação do login de usuário válido
        step01: preencher os campos de email e senha com dados válidos / Campos preenchidos com sucesso e botão de login habilitado
        step02: clicar no botão 'Login' / usuário autenticado com sucesso