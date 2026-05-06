import { fazerLogin } from "../src/login.js"
import assert from "node:assert"

describe('Testes da funcionalidade de login', ()=> {
    it('Deve realizar login com sucesso quando usuário e senha forem validos', () => {
        const acesso = fazerLogin('thiago@mailinator.com', 'P@ssw0rd')
        assert.equal(acesso, 'Login realizado com sucesso')
    })    

    it('Deve obrigar o usuário a renovar a senha expirada', () => {        
        assert.throws(
            () => fazerLogin('elvio@mailinator.com', 'P@ssw0rd'),
                {
                    name: 'Error',
                    message: 'Renove suas credenciais'
                }
        )
    })
    
    it('Deve exibir mensagem de erro quando o usuário não estiver cadastrado', () => {        
        assert.throws(
            () => fazerLogin('fabio@mailinator.com', 'P@ssw0rd'),
                {
                    name: 'Error',
                    message: 'Usuário não encontrado'
                }
        )
    })
    
    it('Deve exibir mensagem de erro quando o usuário digitar a senha incorreta', () => {        
        assert.throws(
            () => fazerLogin('thiago@mailinator.com', 'Passw0rd'),
                {
                    name: 'Error',
                    message: 'Senha incorreta para o usuário encontrado'
                }
        )
    })
})