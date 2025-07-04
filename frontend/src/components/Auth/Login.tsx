import { useLogin } from '../../hooks/useLogin'
import './login.css'

function Login() {
    const { 
        username,
        password,
        errors,
        success,
        setUsername,
        setPassword,
        handleSubmit } = useLogin()

    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="" className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username....' />
                {errors.username && <p className='error'>{errors.username}</p>}
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder='********' />
                {errors.password && <p className='error'>{errors.password}</p>}
                <button disabled={!username || !password || Boolean(errors.password) || Boolean(errors.username)} type='submit' className='login-btn'>Login</button>
            </form>
            {success && (
                <div className="msg login-success">
                    Login successful
                </div>
            )}
            {
                !success &&
                <div className="msg login-failed">
                    Invalid username or password
                </div>
            }
        </div>
    )
}

export default Login
