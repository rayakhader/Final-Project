export const LoginAPI = (username: string, password: string) => {
  return fetch('https://hotel.foothilltech.net/api/auth/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); 
  })
  .catch(error => {
    throw error;  
  });
};
