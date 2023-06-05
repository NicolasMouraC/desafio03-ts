import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    it('Deve retornar verdadeiro caso o email e senha sejam válidos', async() => {
        const response = await login(mockEmail, '123456')
        expect(response).toBeTruthy()
    })

    it('Deve retornar falso caso o email ou senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '12123')
        expect(response).toBeFalsy()
    })
})