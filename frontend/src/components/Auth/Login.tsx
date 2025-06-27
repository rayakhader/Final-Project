import React, { useEffect, useState } from 'react'
import './login.css'
import { LoginAPI } from '../../APIs/Auth/Login';
import { useNavigate } from 'react-router-dom';
import Message from './Message';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const [success, setSuccess] = useState(false);
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
    const navigate = useNavigate();


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        LoginAPI(username, password)
            .then((data) => {
                localStorage.setItem('token', data.authentication);
                localStorage.setItem('userType', data.userType);
                setHasAttemptedLogin(true)
                setSuccess(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }).catch((error) => {
                console.error('Login error:', error);
                setHasAttemptedLogin(true)
                setSuccess(false);
            });


    }
    function validateUsername(username: string) {
        if (username.length < 4) {
            setErrors({
                ...errors,
                username: 'Username must be at least 4 characters long'
            });
            return;
        }
        else if (username.length > 15) {
            setErrors({
                ...errors,
                username:
                    'Username must be less than 15 characters long'
            });
            return;
        }
        else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            setErrors({
                ...errors,
                username:
                    'Username can only contain letters and numbers'
            });
            return;
        } else {
            setErrors({
                ...errors,
                username:
                    ''
            });
        }
    }
    function validatePassword(password: string) {
        if (password.length < 4) {
            setErrors({
                ...errors,
                password:
                    'Password must be at least 4 characters long'
            });
        }
        else {
            setErrors({
                ...errors,
                password: ''
            });
        }
    }
    useEffect(() => {
        if (username) {
            validateUsername(username);
        }
    }, [username]);
    useEffect(() => {
        if (password) {
            validatePassword(password);
        }
    }, [password]);
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
            {hasAttemptedLogin && (success ?(
                <Message message="Login successful" />
            ):<Message message="Invalid password or email" />)}
        </div>
    )
}

export default Login
