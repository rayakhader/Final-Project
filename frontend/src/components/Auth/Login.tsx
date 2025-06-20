import React, { useEffect, useState } from 'react'
import './login.css'
import { LoginAPI } from '../../APIs/Auth/Login';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        LoginAPI(username, password)
            .then((data) => {
                localStorage.setItem('token', data.authentication);
                localStorage.setItem('userType', data.userType);
                setSuccess(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }).catch((error) => {
                console.error('Login error:', error);
                setSuccess(false);
            });


    }
    function validateUsername(username: string) {
        if (username.length < 3) {
            setErrors({
                ...errors,
                username: 'Username must be at least 3 characters long'
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
        if (password.length < 8) {
            setErrors({
                ...errors,
                password:
                    'Password must be at least 8 characters long'
            });
        } else if (password.length > 20) {
            setErrors({
                ...errors,
                password:
                    'Password must be less than 20 characters long'
            });
        } else if (!/[A-Z]/.test(password)) {
            setErrors({
                ...errors,
                password:
                    'Password must contain at least one uppercase letter'
            });
        }
        else if (!/[a-z]/.test(password)) {
            setErrors({
                ...errors,
                password:
                    'Password must contain at least one lowercase letter'
            });
        }
        else if (!/[0-9]/.test(password)) {
            setErrors({
                ...errors,
                password:
                    'Password must contain at least one number'
            });
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setErrors({
                ...errors,
                password:
                    'Password must contain at least one special character'
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
