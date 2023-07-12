export const LoginComponent = () =>{
    return(
        <>
        <form>
            <legend>Login</legend>
        <div>
            <label htmlFor="input-group">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu e-mail aqui" />
        </div>
        <div>
            <label htmlFor="input-group">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha aqui" />
        </div>
        <button type="submit">Logar</button>
        </form>
        </>
    )

}