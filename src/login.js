const usuarios = [
    {
        id: 1,
        nome: 'Thiago andrade',
        email: 'thiago@mailinator.com',
        senha: 'P@ssw0rd',
        expirado: false
    },
    {
        id: 2,
        nome: 'Elvio andrade',
        email: 'elvio@mailinator.com',
        senha: 'P@ssw0rd',
        expirado: true
    }
]

export function fazerLogin(email, senha){
    for(let i = 0; i < usuarios.length; i++){                    
        if(usuarios.at(i).email == email && usuarios.at(i).senha == senha){            
            if(usuarios.at(i).expirado == true){
                throw new Error("Renove suas credenciais")
            }
            return "Login realizado com sucesso"
        }else if(usuarios.at(i).email == email && usuarios.at(i).senha != senha){
            throw new Error("Senha incorreta para o usuário encontrado")
        }
    }
    throw new Error("Usuário não encontrado") 
}

