function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="/verification" method="post">
                <label>Username:</label>
                <input type="text" name="username"/>
                <label>Password:</label>
                <input type="text" name="password"/>
           
                <button>Login</button>
            </form>
         </div>
            )
}

                export default Login;