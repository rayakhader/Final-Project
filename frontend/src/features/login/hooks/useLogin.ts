import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../../context/TokenProvider';
import { login } from '../services/login';
import { UserTypeContext } from '../../../context/UserTypeProvider';
import { jwtDecode } from 'jwt-decode';


type Errors = {
  username: string;
  password: string;
};
type Status = "idle" | "success" | "error"


export function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({ username: '', password: '' });
  const [status, setStatus] = useState<Status>("idle")
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext)
  const { setUserType } = useContext(UserTypeContext)

  function validateUsername(value: string) {
    if (value.length < 3) {
      setErrors(prev => ({ ...prev, username: 'Username must be at least 3 characters long' }));
    } else if (value.length > 15) {
      setErrors(prev => ({ ...prev, username: 'Username must be less than 15 characters long' }));
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setErrors(prev => ({ ...prev, username: 'Username can only contain letters and numbers' }));
    } else {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  }

  function validatePassword(value: string) {
    if (value.length < 4) {
      setErrors(prev => ({ ...prev, password: 'Password must be at least 4 characters long' }));
    } else if (value.length > 20) {
      setErrors(prev => ({ ...prev, password: 'Password must be less than 20 characters long' }));
    } else if (!/[a-z]/.test(value)) {
      setErrors(prev => ({ ...prev, password: 'Password must contain at least one lowercase letter' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  }

  useEffect(() => {
    if (username) validateUsername(username);
  }, [username]);

  useEffect(() => {
    if (password) validatePassword(password);
  }, [password]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.authentication);
      localStorage.setItem('userType', data.userType);
      setToken(data.authentication)
      setUserType(data.userType)
      setStatus("success");
    } catch (err) {
      console.error('Login error:', err);
      setStatus("error");
    }
  }

  return {
    username,
    password,
    errors,
    status,
    setUsername,
    setPassword,
    handleSubmit
  };
}
