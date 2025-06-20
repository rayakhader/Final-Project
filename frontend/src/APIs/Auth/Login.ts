export const LoginAPI = (username: string, password: string) => {
  return fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(async response => {
    if (!response.ok) {
      let errorMessage = 'Login failed';
      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
      }
      throw new Error(errorMessage);
    }

    return response.json(); 
  })
  .catch(error => {
    console.error('Error:', error.message);
    throw error;  
  });
};
